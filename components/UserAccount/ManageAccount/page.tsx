"use client";
import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillPrinter } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "@/slices/userSlice";
import moment from "moment";
import PrintComponent from "@/components/common/PrintComponent";

const ManageAccount = () => {
  const dispatch = useDispatch();
  const tableRef = useRef<HTMLTableElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const users = useSelector((state: any) => state.user.users);

  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const filteredData = users.filter(
    (item: any) =>
      item?.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // const handleDeleteProduct = (productId: string) => {
  //   dispatch(deleteProduct(productId)).then(() => {
  //     dispatch(getAllProducts());
  //   });
  // };

  return (
    <>
      <Breadcrumb pageName="Manage User Accounts" />
      <div className="mb-4 flex items-center justify-between">
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search by Email or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          <span className="text-gray-400 dark:text-gray-600 absolute right-3 top-3">
            <IoSearch className="h-6 w-6" />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <PrintComponent tableRef={tableRef} />
          <Link
            href={"/dashboard/user_account/user_add"}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
          >
            <GoArrowUpRight className="h-5 w-5 " />
            Add New Customer
          </Link>
        </div>
      </div>

      <div className="rounded-md border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full overflow-x-auto">
          <table ref={tableRef} className="w-full table-auto">
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
              {filteredData.map((packageItem: any, index: any) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?._id}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem?.username}
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
                      {moment(packageItem?.createdDate).format("YYYY-MM-DD")}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {moment(packageItem?.updatedDate).format("YYYY-MM-DD")}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="relative flex items-center space-x-3.5">
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
