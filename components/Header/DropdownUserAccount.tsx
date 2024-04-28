'use client'
import Link from "next/link";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbFileStack } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";

const DropdownUserAccount = ({ dropdownOpen, handleLogout }:any) => {
  if (!dropdownOpen) return null;

  return (
    <div className="absolute right-10 mt-2 flex w-62.5 flex-col rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark z-99999 ">
      <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
        <li>
          <Link
            href="/my-account"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <VscAccount className="h-5 w-5 text-graydark dark:text-meta-3" />
            {/* <IoSettingsOutline className="h-5 w-5 text-graydark dark:text-meta-3" /> */}
            My Account
          </Link>
        </li>
        <li>
          <Link
            href="/my-account/orders"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <TbFileStack className="h-5 w-5 text-graydark dark:text-meta-3" />
            Order History
          </Link>
        </li>
      </ul>
      <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
        <BiLogOut className="h-5 w-5 text-graydark dark:text-meta-3" onClick={handleLogout}/>
        Log Out
      </button>
    </div>
  );
};

export default DropdownUserAccount;
