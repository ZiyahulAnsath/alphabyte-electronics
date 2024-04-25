"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { AiFillPrinter } from "react-icons/ai";

const packageData = [
    {
      productName: "Gaming Laptop",
      brand: "Asus",
      model: "ROG",
      qty: 5,
      price: 0.0,
      CreatedDate: "Jan 13,2023",
      UpdatedDate: "Jan 13,2024",
      status: "Cancel",
      description: "Core i3 12th Gen AMD 512MB Graphics Card",
      customerName: "Customer 1",
      orderId: "Order #1",
      postalCode: "12345",
      email: "customer1@example.com",
      address: "123 Main St",
      townCity: "Anytown",
      state: "State",
      phone: "123-456-7890"
    },
    {
      productName: "Gaming Laptop",
      brand: "Asus",
      model: "ROG",
      qty: 3,
      price: 0.0,
      CreatedDate: "Feb 5,2023",
      UpdatedDate: "Feb 15,2024",
      status: "Pending",
      description: "Core i5 13th Gen Nvidia GTX 1650 Graphics Card",
      customerName: "Customer 2",
      orderId: "Order #2",
      postalCode: "54321",
      email: "customer2@example.com",
      address: "456 Elm St",
      townCity: "Othertown",
      state: "Province",
      phone: "987-654-3210"
    },
    {
      productName: "Gaming Laptop",
      brand: "Asus",
      model: "ROG",
      qty: 2,
      price: 0.0,
      CreatedDate: "Mar 21,2023",
      UpdatedDate: "Mar 25,2024",
      status: "Delivered",
      description: "Core i7 14th Gen Nvidia RTX 3060 Graphics Card",
      customerName: "Customer 3",
      orderId: "Order #3",
      postalCode: "67890",
      email: "customer3@example.com",
      address: "789 Oak St",
      townCity: "Sometown",
      state: "Territory",
      phone: "456-789-0123"
    }
  ];
  
  

const ShippingDetail = () => {
  const [searchTerm, setSearchTerm] = useState("");
 

  const filteredData = packageData.filter(
    (item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Breadcrumb pageName="Shipping Details" />
      <div className="flex justify-between items-center mb-4">
        <div className="w-80 relative">
          <input
            type="text"
            placeholder="Search by OrderID | name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          <span className="absolute right-3 top-3 text-gray-400 dark:text-gray-600">
            <IoSearch className='w-6 h-6'/>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={'/user_account/user_manage'}
            className="flex items-center gap-2 rounded-md bg-meta-3 px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
          >
            <AiFillPrinter className="h-5 w-5 " />
            Print Data
          </Link>
        </div>
      </div>

      <div className="rounded-md border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b-black bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[100px] px-4 py-4 font-medium text-black dark:text-white">
                  Order Id
                </th>
                <th className="min-w-[100px] px-4 py-4 font-medium text-black dark:text-white">
                  User Name
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Email
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Address
                </th>
                <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white">
                  Zip
                </th>
                <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white">
                  Town/City
                </th>
                <th className="min-w-[100px] px-4 py-4 font-medium text-black dark:text-white">
                  State
                </th>
                <th className="min-w-[100px] px-4 py-4 font-medium text-black dark:text-white">
                  Phone No
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Description
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Date
                </th>
                <th className="min-w-[100px] px-4 py-4 font-medium text-black dark:text-white">
                  Status
                </th> 
                 <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((packageItem, index) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.orderId}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.customerName}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.email}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.address}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-sm text-black dark:text-white">
                      {packageItem.postalCode}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.townCity}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.state}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.phone}
                    </p>
                  </td> 
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.description}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.UpdatedDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                        packageItem.status === "Delivered"
                          ? "bg-success text-success"
                          : packageItem.status === "Cancel"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                      }`}
                    >
                      {packageItem.status}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5 relative">
                      <button
                        className="hover:text-primary"
                        // onClick={() => handleEditClick(index)}
                      >
                        <FaEdit className="h-5 w-5" />
                      </button>
                      <button className="hover:text-red">
                        <RiDeleteBinFill className="h-5 w-5" />
                      </button>
                     
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShippingDetail;
