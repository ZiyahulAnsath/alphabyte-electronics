import React from "react";
import Link from "next/link";
import { TbFileStack } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

interface SidebarUtilitiesProps {
  pathname: string;
  generateSidebarLinkGroup: (
    title: string,
    icon: JSX.Element,
    linkBase: string,
    links: { label: string; path: string }[],
  ) => JSX.Element;
}

const SidebarUtilities: React.FC<SidebarUtilitiesProps> = ({
  pathname,
  generateSidebarLinkGroup,
}) => {
  return (
    <nav className="mt-5 px-4 lg:px-6">
      <div>
        <h3 className="mb-4 ml-2 text-sm font-semibold text-bodydark2">
          UTILITIES
        </h3>

        <ul className="mb-6 flex flex-col gap-1.5">
          {/* Menu Item Order History */}
          <li>
            <Link
              href="/dashboard/order_history"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                pathname.includes("order_history") &&
                "bg-graydark dark:bg-meta-4"
              }`}
            >
              <TbFileStack className="h-5 w-5 text-blue-300 dark:text-meta-3" />
              Order History
            </Link>
          </li>
          {/* End Menu Item Order History */}

          {/* <!-- Menu Item User Account --> */}
          {generateSidebarLinkGroup(
            "Customer Account",
            <MdOutlineManageAccounts className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/user_account",
            [
              {
                label: "Create New Account",
                path: "/dashboard/user_account/user_add",
              },
              {
                label: "Manage Account",
                path: "/dashboard/user_account/user_manage",
              },
            ],
          )}
          {/* <!-- Menu Item User Account --> */}

          {/* Menu Item Shipping Details */}
          <li>
            <Link
              href="/dashboard/shipping_detail"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                pathname.includes("shipping_detail") &&
                "bg-graydark dark:bg-meta-4"
              }`}
            >
              <FaShippingFast className="h-5 w-5 text-blue-300 dark:text-meta-3" />
              Shipping Details
            </Link>
          </li>
          {/* End Menu Item Shipping Details */}
        </ul>

        <h3 className="mb-4 ml-2 text-sm font-semibold text-bodydark2">
          GENERAL
        </h3>

        <ul className="mb-6 flex flex-col gap-1.5">
          {/* Menu Item Settings */}
          <li>
            <Link
              href="/dashboard/settings"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                pathname.includes("settings") && "bg-graydark dark:bg-meta-4"
              }`}
            >
              <IoSettingsOutline className="h-5 w-5 text-blue-300 dark:text-meta-3" />
              Settings
            </Link>
          </li>
          {/* End Menu Item Settings */}

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
  );
};

export default SidebarUtilities;
