import Link from "next/link";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";

interface SidebarMenuProps {
  pathname: string;
}

const UserDashboardSidebar: React.FC<SidebarMenuProps> = ({ pathname }) => {
  return (
    <>
      <nav className="mt-5 px-4 lg:px-6">
        <div>
          <ul className="mb-10 flex flex-col gap-6">
            {/* Menu Dashboard */}
            <li
              className={
                pathname === "/my-account" ? "bg-graydark dark:bg-meta-4" : ""
              }
            >
              <Link
                href="/my-account"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname === "/dashboard" && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <LuLayoutDashboard className="h-5 w-5 text-blue-300 dark:text-meta-3" />
                Dashboard
              </Link>
            </li>
            {/* End Menu Dashboard */}
            {/* Menu Account */}
            <li
              className={
                pathname === "/my-account/profile"
                  ? "bg-graydark dark:bg-meta-4"
                  : ""
              }
            >
              <Link
                href="/my-account/profile"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname === "/dashboard" && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <LuLayoutDashboard className="h-5 w-5 text-blue-300 dark:text-meta-3" />
                Account Details
              </Link>
            </li>
            {/* End Menu Account */}
            {/* Menu Orders */}
            <li
              className={
                pathname === "/my-account/orders"
                  ? "bg-graydark dark:bg-meta-4"
                  : ""
              }
            >
              <Link
                href="/my-account/orders"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname === "/dashboard" && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <LuLayoutDashboard className="h-5 w-5 text-blue-300 dark:text-meta-3" />
                Orders
              </Link>
            </li>
            {/* End Menu Orders */}
            {/* Menu Shipping */}
            <li
              className={
                pathname === "/my-account/address"
                  ? "bg-graydark dark:bg-meta-4"
                  : ""
              }
            >
              <Link
                href="/my-account/address"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname === "/dashboard" && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <LuLayoutDashboard className="h-5 w-5 text-blue-300 dark:text-meta-3" />
                Shipping Address
              </Link>
            </li>
            {/* End Menu Shipping */}
            {/* Menu Item Logout */}
            <li>
              <Link
                href="/"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname.includes("Logout") && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <BiLogOut className="h-5 w-5 text-blue-300 dark:text-meta-3" />
                Logout
              </Link>
            </li>
            {/* End Menu Item Logout */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserDashboardSidebar;
