import React from "react";
import Link from "next/link";
import { MdOutlineAppRegistration } from "react-icons/md";
import { LuCable, LuLayoutDashboard, LuMonitor } from "react-icons/lu";
import { BsMotherboard, BsUsbSymbol } from "react-icons/bs";
import { FaApple, FaPlugCircleBolt, FaRegKeyboard } from "react-icons/fa6";
import {
  PiDesktopTower,
  PiDesktopTowerFill,
  PiLaptopLight,
  PiSpeakerSimpleHigh,
} from "react-icons/pi";
import { GrFanOption, GrStorage } from "react-icons/gr";
import { GiConsoleController, GiProcessor } from "react-icons/gi";
import { IoTabletLandscape } from "react-icons/io5";

interface SidebarMenuProps {
  pathname: string;
  generateSidebarLinkGroup: (
    title: string,
    icon: JSX.Element,
    linkBase: string,
    links: { label: string; path: string }[],
  ) => JSX.Element;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  pathname,
  generateSidebarLinkGroup,
}) => {
  return (
    <nav className="mt-5 px-4 lg:px-6">
      <div>
        <ul className="mb-6 flex flex-col gap-1.5">
          {/* Menu Item Dashboard */}
          <li className={pathname === "/" ? "bg-graydark dark:bg-meta-4" : ""}>
            <Link
              href="/dashboard"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                pathname === "/dashboard" && "bg-graydark dark:bg-meta-4"
              }`}
            >
              <LuLayoutDashboard className="h-5 w-5 text-blue-300 dark:text-meta-3" />
              Dashboard
            </Link>
          </li>
          {/* End Menu Item Dashboard */}
        </ul>

        <h3 className="mb-4 ml-2 text-sm font-semibold text-bodydark2">MENU</h3>

        <ul className="mb-6 flex flex-col gap-1.5">
          {/* Manage Main Section */}
          {generateSidebarLinkGroup(
            "Manage Section",
            <MdOutlineAppRegistration className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/manage_section",
            [
              {
                label: "Manage Cateogory",
                path: "/dashboard/manage_section/category",
              },
              { label: "Manage Brand", path: "/dashboard/manage_section/brand" },
              { label: "Manage Model", path: "/dashboard/manage_section/model" },
            ],
          )}
          {/* End Main Section */}

          {/* Menu Item Laptop */}
          {generateSidebarLinkGroup(
            "Laptops",
            <PiLaptopLight className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/laptops",
            [
              { label: "Add Laptop", path: "/dashboard/laptops/laptop-add" },
              { label: "Manage Laptop", path: "/dashboard/laptops/laptop-manage" },
            ],
          )}
          {/* End Menu Item Laptop */}

          {/* Menu Item Desktop workstations */}
          {generateSidebarLinkGroup(
            "Workstations",
            <PiDesktopTower className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/workstations",
            [
              { label: "Add Workstations", path: "/dashboard/workstations/add" },
              {
                label: "Manage Workstations",
                path: "/dashboard/workstations/manage",
              },
            ],
          )}
          {/* End Menu Item Desktop workstations */}

          {/* Menu Item Gaming Desktops */}
          {generateSidebarLinkGroup(
            "Gaming Desktops",
            <PiDesktopTowerFill className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/gamming_desktops",
            [
              {
                label: "Add Gaming Desktops",
                path: "/dashboard/gamming_desktops/add",
              },
              {
                label: "Manage Gaming Desktops",
                path: "/dashboard/gamming_desktops/manage",
              },
            ],
          )}
          {/* End Menu Item Gaming Desktops */}

          {/* Menu Item Apple */}
          {generateSidebarLinkGroup(
            "Apple Products",
            <FaApple className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/apple_products",
            [
              { label: "Add Apple Product", path: "/dashboard/apple_products/add" },
              {
                label: "Manage Apple Product",
                path: "/dashboard/apple_products/manage",
              },
            ],
          )}
          {/* End Menu Item Apple */}

          {/* Menu Item Console Gamming */}
          {generateSidebarLinkGroup(
            "Console Gamming",
            <GiConsoleController className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/gamming_console",
            [
              {
                label: "Add Console Gamming",
                path: "/dashboard/gamming_console/add",
              },
              {
                label: "Manage Console Gamming",
                path: "/dashboard/gamming_console/manage",
              },
            ],
          )}
          {/* End Menu Item Console Gamming */}

          {/* Menu Item graphics-tablet */}
          {generateSidebarLinkGroup(
            "Graphics-Tablet / Tab",
            <IoTabletLandscape className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/graphics-tablet",
            [
              {
                label: "Add Graphics-Tablet / Tab",
                path: "/dashboard/graphics-tablet/add",
              },
              {
                label: "Manage Graphics-Tablet / Tab",
                path: "/dashboard/graphics-tablet/manage",
              },
            ],
          )}
          {/* End Menu Item graphics-tablet */}

          {/* Menu Item Processor */}
          {generateSidebarLinkGroup(
            "Processors",
            <GiProcessor className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/processors",
            [
              { label: "Add Processors", path: "/dashboard/processors/add" },
              { label: "Manage Processors", path: "/dashboard/processors/manage" },
            ],
          )}
          {/* End Menu Item Processor */}

          {/* Menu Item Motherboards */}
          {generateSidebarLinkGroup(
            "Motherboards",
            <BsMotherboard className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/motherboards",
            [
              { label: "Add Motherboards", path: "/dashboard/motherboards/add" },
              {
                label: "Manage Motherboards",
                path: "/dashboard/motherboards/manage",
              },
            ],
          )}
          {/* End Menu Item Motherboards */}

          {/* Menu Item RAM */}
          {generateSidebarLinkGroup(
            "RAM",
            <img
              src="/images/icon/ram.svg"
              alt="RAM Icon"
              className="h-5 w-5 text-blue-300 dark:text-meta-3"
            />,
            "/dashboard/ram",
            [
              { label: "Add RAM", path: "/dashboard/ram/add" },
              { label: "Manage RAM", path: "/dashboard/ram/manage" },
            ],
          )}
          {/* End Menu Item RAM */}

          {/* Menu Item Desktop Graphics Card */}
          {generateSidebarLinkGroup(
            "Graphics Card",
            <img
              src="/images/icon/vga.svg"
              alt="Example Icon"
              className="h-5 w-5 text-blue-300 dark:text-meta-3"
            />,
            "/dashboard/graphics_card",
            [
              { label: "Add Graphics Card", path: "/dashboard/graphics_card/add" },
              {
                label: "Manage Graphics Card",
                path: "/dashboard/graphics_card/manage",
              },
            ],
          )}
          {/* End Menu Item Desktop Graphics Card */}

          {/* Menu Item Power Supply */}
          {generateSidebarLinkGroup(
            "Power Supply",
            <FaPlugCircleBolt className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/power_supply",
            [
              { label: "Add Power Supply", path: "/dashboard/power_supply/add" },
              {
                label: "Manage Power Supply",
                path: "/dashboard/power_supply/manage",
              },
            ],
          )}
          {/* End Menu Item Power Supply */}

          {/* Menu Item Coolers  */}
          {generateSidebarLinkGroup(
            "Coolers",
            <GrFanOption className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/cooler",
            [
              { label: "Add Coolers", path: "/dashboard/cooler/add" },
              { label: "Manage Coolers", path: "/dashboard/cooler/manage" },
            ],
          )}
          {/* End Menu Item Coolers */}

          {/* Menu Item Storage */}
          {generateSidebarLinkGroup(
            "Storage",
            <GrStorage className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/storage",
            [
              { label: "Add Storage", path: "/dashboard/storage/add" },
              { label: "Manage Storage", path: "/dashboard/storage/manage" },
            ],
          )}
          {/* End Menu Item Storage */}

          {/* Menu Item Casings */}
          {generateSidebarLinkGroup(
            "Casings",
            <img
              src="/images/icon/cpu.svg"
              alt="Casing Icon"
              className="h-5 w-5 text-blue-300 dark:text-meta-3"
            />,
            "/dashboard/casing",
            [
              { label: "Add Casings", path: "/dashboard/casing/add" },
              { label: "Manage Casings", path: "/dashboard/casing/manage" },
            ],
          )}
          {/* End Menu Item Casings */}

          {/* Menu Item Monitors */}
          {generateSidebarLinkGroup(
            "Monitors",
            <LuMonitor className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/monitor",
            [
              { label: "Add Monitors", path: "/dashboard/monitor/add" },
              { label: "Manage Monitors", path: "/dashboard/monitor/manage" },
            ],
          )}
          {/* End Menu Item Monitors */}

          {/* Menu Item Speakers */}
          {generateSidebarLinkGroup(
            "Speakers",
            <PiSpeakerSimpleHigh className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/speaker",
            [
              { label: "Add Speakers", path: "/dashboard/speaker/add" },
              { label: "Manage Speakers", path: "/dashboard/speaker/manage" },
            ],
          )}
          {/* End Menu Item Speakers */}

          {/* Menu Item Keyboards */}
          {generateSidebarLinkGroup(
            "Keyboards",
            <FaRegKeyboard className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/keyboard",
            [
              { label: "Add Keyboards", path: "/dashboard/keyboard/add" },
              { label: "Manage Keyboards", path: "/dashboard/keyboard/manage" },
            ],
          )}
          {/* End Menu Item Keyboards */}

          {/* Menu Item Cable */}
          {generateSidebarLinkGroup(
            "Cables",
            <LuCable className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/cable",
            [
              { label: "Add Cable", path: "/dashboard/cable/add" },
              { label: "Manage Cable", path: "/dashboard/cable/manage" },
            ],
          )}
          {/* End Menu Item Cable */}

          {/* Menu Item External Storage */}
          {generateSidebarLinkGroup(
            "External Storage",
            <BsUsbSymbol className="h-5 w-5 text-blue-300 dark:text-meta-3" />,
            "/dashboard/external_storage",
            [
              {
                label: "Add External Storage",
                path: "/dashboard/external_storage/add",
              },
              {
                label: "Manage External Storage",
                path: "/dashboard/external_storage/manage",
              },
            ],
          )}
          {/* End Menu Item External Storage */}
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
