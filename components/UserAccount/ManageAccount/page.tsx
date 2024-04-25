"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillPrinter } from "react-icons/ai";

const packageData = [
    {
      name: "Customer 1",
      email: "customer1@example.com",
      password: "yourpassword",
      createdDate: "Jan 13, 2023",
      updatedDate: "Jan 13, 2024",
      userId: "ID12345"
    },
    {
      name: "Customer 2",
      email: "customer2@example.com",
      password: "anotherpassword",
      createdDate: "Feb 5, 2023",
      updatedDate: "Mar 20, 2024",
      userId: "ID67890"
    },
    {
      name: "Customer 3",
      email: "customer3@example.com",
      password: "s3cur3pass",
      createdDate: "Mar 21, 2023",
      updatedDate: "Apr 10, 2024",
      userId: "ID24680"
    },
    {
      name: "Customer 4",
      email: "customer4@example.com",
      password: "strongpass123",
      createdDate: "Apr 2, 2023",
      updatedDate: "Apr 20, 2024",
      userId: "ID13579"
    },
    {
      name: "Customer 5",
      email: "customer5@example.com",
      password: "mysecretpassword",
      createdDate: "May 10, 2023",
      updatedDate: "May 15, 2024",
      userId: "ID97531"
    }
  ];  
  

const ManageAccount = () => {
  const [searchTerm, setSearchTerm] = useState("");
 

  const filteredData = packageData.filter(
    (item) =>
      item?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.userId.toLowerCase().includes(searchTerm.toLowerCase())||
      item?.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Breadcrumb pageName="Manage User Accounts" />
      <div className="flex justify-between items-center mb-4">
        <div className="w-80 relative">
          <input
            type="text"
            placeholder="Search by Email or name..."
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
            href={'/laptops/laptop-add'}
            className="flex items-center gap-2 rounded-md bg-meta-3 px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
          >
            <AiFillPrinter className="h-5 w-5 " />
            Print Data
          </Link>
          <Link
            href={'/user_account/user_add'}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
          >
            <GoArrowUpRight className="h-5 w-5 " />
            Add New Customer
          </Link>
        </div>
      </div>


      <div className="rounded-md border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b-black bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  User Id
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Name
                </th>
                <th className="min-w-[200px] px-4 py-4 font-medium text-black dark:text-white">
                  Email
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Password
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
              {filteredData.map((packageItem, index) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.userId}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.name}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.email}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.password}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-sm text-black dark:text-white">
                      {packageItem?.createdDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.updatedDate}
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

export default ManageAccount;
