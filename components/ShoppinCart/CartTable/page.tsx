"use client";

import { useState } from "react";
import { Table } from "antd";
import Image from "next/image";
import lgo1 from "@/public/images/brand/apple.svg";
import CartDetailsPopup from "./CartDetailsPopup/page";
import MobileCartTable from "./MobileCartTable/page";
import { BsTrash3 } from "react-icons/bs";

const CartTable = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartData, setCartData] = useState([
    {
      key: "1",
      productName: "Kring New Fit office chair",
      price: 200,
      quantity: 1,
      subtotal:200*2
    },
    {
      key: "2",
      productName: "Kring New Fit office chair",
      price: 200,
      quantity: 2,
      subtotal:200*5
    },
    // Add more data rows as needed
  ]);

  const handleRowClick = (product: any) => {
    setSelectedProduct(product);
  };

 
  const handleDeleteRow = (key: any) => {
    const updatedCartData = cartData.filter((item) => item.key !== key);
    setCartData(updatedCartData);
  };

  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        "selectedRowKeys:",
        selectedRowKeys,
        "selectedRows:",
        selectedRows
      );
    }
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
        <div
          className="flex items-center hover:cursor-pointer hover:text-green-text"
          onClick={() => handleRowClick(record)}
        >
          <Image
            src={lgo1}
            alt="card"
            className="md:w-20 w-12 md:h-20 h-12 border-transparent rounded-md"
            style={{
              height: "auto",
              objectFit: "cover",
            }}
          />
          <div className="md:pl-4 pl-2">
            <h2 className="text-md text-gray-text">{text}</h2>
          </div>
        </div>
      ),
    },
    {
      title: "(LKR) Price",
      dataIndex: "price",
      render: (price: any) => <span className=" text-gray-text font-semibold">LKR{" "}{price}</span>,
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
        <span className=" text-gray-text font-semibold">LKR{" "}{record.price * record.quantity}</span>
      ),
    },
    {
      title: "Delete",
      dataIndex: "action",
      render: (_: any, record: any) => (
        <button
          className="flex items-center gap-2 font-bold border-transparent rounded-lg hover:text-red-200 hover:bg-red-800 uppercase tracking-wider text-red-800 bg-red-200 px-2 py-2"
          onClick={() => handleDeleteRow(record.key)}
        >Delete
          <BsTrash3 className="w-6 h-6"/>
        </button>
      ),
    },
  ];

  const handleQuantityChange = (key: any, newQuantity: any) => {
    const updatedCartData = cartData.map((item) => {
      if (item.key === key) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartData(updatedCartData);
  };

  return (
    <>
      <div className="overflow-auto rounded-lg shadow hidden md:block">
      {/* <div className="overflow-auto rounded-lg shadow"> */}
        <Table
        className="transparent-table"
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

      {/* Start popup cart model */}
        <CartDetailsPopup selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
      {/* End popup cart model */}

      {/* Start Mobile View */}
        <MobileCartTable/>
      {/* End Mobile View */}
    </>
  );
};

const Price = ({ quantity, price, onChange }: any) => {
  const handleQuantityChange = (e:any) => {
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
