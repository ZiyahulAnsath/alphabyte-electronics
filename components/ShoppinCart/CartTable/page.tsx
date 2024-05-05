"use client";
import { useEffect, useState } from "react";
import { Table } from "antd";
import Image from "next/image";
import lgo1 from "@/public/images/brand/apple.svg";
import CartDetailsPopup from "./CartDetailsPopup/page";
import MobileCartTable from "./MobileCartTable/page";
import { BsTrash3 } from "react-icons/bs";

const CartTable = ({ cart, onSubtotalChange }: any) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (Array.isArray(cart)) {
      setCartData(cart);
    } else {
      setCartData(
        Object.values(cart).map((item: any, index: number) => ({
          ...item,
          key: index,
        }))
      );
    }
  }, [cart]);

  const handleRowClick = (product: any) => {
    setSelectedProduct(product);
  };

  const handleDeleteRow = (key: any) => {
    const updatedCartData = cartData.filter((item: any) => item.key !== key);
    setCartData(updatedCartData);
    calculateSubtotal(updatedCartData);
  };

  const handleQuantityChange = (key: any, newQuantity: any) => {
    const updatedCartData = cartData.map((item: any) => {
      if (item.key === key) {
        const subtotal = item.price * newQuantity;
        console.log("Subtotal for", item.productName, ":", subtotal);
        return { ...item, quantity: newQuantity, subtotal };
      }
      return item;
    });
    setCartData(updatedCartData);
    calculateSubtotal(updatedCartData);
  };

  const calculateSubtotal = (cartData: any[]) => {
    if (Array.isArray(cartData)) {
      const totalSubtotal = cartData.reduce(
        (acc: number, curr: any) => acc + (curr.subtotal || 0),
        0
      );
      onSubtotalChange(totalSubtotal);
    }
  };

  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        "selectedRowKeys:",
        selectedRowKeys,
        "selectedRows:",
        selectedRows
      );
    },
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "key",
      render: (_: any, record: any) => record.key,
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      render: (text: any, record: any) => (
        <div className="flex">
          <div className="flex-col items-center">
            <div>
              <Image
                src={lgo1}
                alt="card"
                className="md:w-20 w-12 md:h-20 h-12 border-transparent rounded-md"
                style={{
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="md:pl-4 pl-2">
              <h2 className="text-md text-gray-text">{record.name}</h2>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "(LKR) Price",
      dataIndex: "price",
      render: (price: any) => (
        <span className="text-gray-text font-semibold">LKR {price}</span>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (_: any, record: any) => (
        <>
          <Price
            quantity={record.quantity}
            price={record.price}
            onChange={(newQuantity: any) =>
              handleQuantityChange(record.key, newQuantity)
            }
          />
        </>
      ),
    },
    {
      title: "(LKR) Sub Total",
      dataIndex: "subtotal",
      render: (_: any, record: any) => (
        <span className="text-gray-text font-semibold">
          LKR {record.subtotal || 0}
        </span>
      ),
    },
    {
      title: "Delete",
      dataIndex: "action",
      render: (_: any, record: any) => (
        <button
          className="flex items-center gap-2 font-bold border-transparent rounded-lg hover:text-red-200 hover:bg-red-800 uppercase tracking-wider text-red-800 bg-red-200 px-2 py-2"
          onClick={() => handleDeleteRow(record.key)}
        >
          Delete
          <BsTrash3 className="w-6 h-6" />
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <Table
          className="hover:bg-black"
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={cartData}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
      <CartDetailsPopup
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <MobileCartTable cart={cart} />
    </>
  );
};

const Price = ({ quantity, price, onChange }: any) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    onChange(newQuantity);
  };

  return (
    <input
      type="number"
      value={quantity}
      onChange={handleQuantityChange}
      className="border border-gray-300 rounded-md px-2 py-1 bg-transparent "
    />
  );
};

export default CartTable;
