'use client'
import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import Link from 'next/link';
import { AiFillPrinter } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { RiDeleteBinFill } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';

const packageData = [
  {
    name: "Free package",
    brand: "Asus",
    model: "ROG",
    qty: 5,
    price: 0.0,
    CreatedDate: `Jan 13,2023`,
    UpdatedDate: `Jan 13,2024`,
    status: "Paid",
    description:"Core i3 12th Gen AMD 512MB Graphics Card"
  },
  {
    name: "Standard Package",
    brand: "Asus",
    model: "ROG",
    qty: 5,
    price: 59.0,
    CreatedDate: `Jan 13,2023`,
    UpdatedDate: `Jan 13,2024`,
    status: "Paid",
    description:"Core i3 12th Gen AMD 512MB Graphics Card"
  },
  {
    name: "Business Package",
    brand: "Asus",
    model: "ROG",
    qty: 5,
    price: 99.0,
    CreatedDate: `Jan 13,2023`,
    UpdatedDate: `Jan 13,2024`,
    status: "Unpaid",
    description:"Core i3 12th Gen AMD 512MB Graphics Card"
  },
  {
    name: "Standard Package",
    brand: "Asus",
    model: "ROG",
    qty: 5,
    price: 59.0,
    CreatedDate: `Jan 13,2023`,
    UpdatedDate: `Jan 13,2024`,
    status: "Paid",
    description:"Core i3 12th Gen AMD 512MB Graphics Card"
  },
  ,
  {
    name: "Standard Package",
    brand: "Asus",
    model: "ROG",
    qty: 5,
    price: 59.0,
    CreatedDate: `Jan 13,2023`,
    UpdatedDate: `Jan 13,2024`,
    status: "Paid",
    description:"Core i3 12th Gen AMD 512MB Graphics Card"
  },
  {
    name: "Business Package",
    brand: "Asus",
    model: "ROG",
    qty: 5,
    price: 99.0,
    CreatedDate: `Jan 13,2023`,
    UpdatedDate: `Jan 13,2024`,
    status: "Unpaid",
    description:"Core i3 12th Gen AMD 512MB Graphics Card"
  },
];

const ManageProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');

   // Filtering function
   const filteredData = packageData.filter((item) =>
    item?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Breadcrumb pageName="Manage Product" />
      <div className="flex justify-between items-center mb-4">
        <div className="w-80 relative">
          <input
            type="text"
            placeholder="Search by product name..."
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
            href={'/dashboard/products/manage_products'}
            className="flex items-center gap-2 rounded-md bg-meta-3 px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
          >
            <AiFillPrinter className="h-5 w-5 " />
            Print Data
          </Link>
          <Link
            href={'/dashboard/products/add_product'}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
          >
            <GoArrowUpRight className="h-5 w-5 " />
            Add New Product
          </Link>
        </div>
      </div>

      <div className="rounded-md border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 border-b-black text-left dark:bg-meta-4">
                <th className="min-w-[180px] px-4 py-4 font-medium text-black dark:text-white">
                  Product Name
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Brand
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Model
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Quantity
                </th>
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white">
                  Description
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Created Date
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Updated Date
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem?.name}
                    </h5>
                    <p className="text-sm">${packageItem?.price}</p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.brand}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.model}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.qty}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white text-sm">
                      {packageItem?.description}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.CreatedDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    {/* <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Paid"
                        ? "bg-success text-success"
                        : packageItem.status === "Unpaid"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p> */}
                    <p className="text-black dark:text-white">
                      {packageItem?.UpdatedDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
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

export default ManageProduct;
