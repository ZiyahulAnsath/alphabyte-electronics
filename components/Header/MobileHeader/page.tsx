"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { Badge } from "antd";

const links = ["Home", "Categories", "Services", "Gallery", "Contact"];

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      {/* Mobile Menu */}

      <div className="sm:hidden flex flex-wrap items-center justify-around">
        <div className="w-full shadow-xl border-b pb-0.5">
          <div className="flex gap-2 items-center w-full justify-center ">
            <DevicePhoneMobileIcon className="h-6 w-6 text-green-text" />

            <Link
              href={"#"}
              className=" hover:text-green-text hover:font-semibold"
            >
              +94 777777777
            </Link>
          </div>
        </div>

        <div className="w-full flex mt-4 justify-between items-center">
          <div className="relative">
            <Badge count={5} className=" absolute ">
              <div className="rounded-2xl p-2 bg-green-text">
                <ShoppingCartIcon className="h-8 w-8 text-gray-950 pt-1" />
              </div>
            </Badge>
            <div className="flex flex-wrap ml-16">
              <h3 className=" font-semibold w-full">100,00 LKR</h3>
              <p className=" text-xs w-full text-gray-text">
                Buy & Build Your product
              </p>
            </div>
          </div>

          <div className="glossy_icon hover:text-green-text ">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-text hover:text-green-text" />
          </div>
        </div>
        <div className="w-full mt-5">
          <div className="cursor-pointer flex items-center justify-between h-6">
            <Link href={"/"}>
              <Image src={"/test.png"} alt="logo" width={60} height={60} />
            </Link>
            <div onClick={toggleMenu} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-[#11F428]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </div>
            <div
              className={
                menuOpen
                  ? "fixed top-0 left-0 w-[80%] sm:hidden h-screen bg-[#474545] ease-in-out duration-500"
                  : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
              }
            >
              <div
                onClick={toggleMenu}
                className="w-full flex items-center justify-end mt-2 px-3"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-[#11F428]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg> */}
                <XCircleIcon className="w-8 h-8 text-green-text" />
              </div>

              {/* Mobile Menu Links */}
              <ul>
                {links.map((link) => (
                  <li
                    key={link}
                    className="pl-4 py-4 text-sm font-bold
                hover:text-[#11F428] text-gray-text"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link href={link.toLowerCase()}>{link}</Link>
                  </li>
                ))}
                <li
                  className="w-[60%] text-center text-gray-bg_primary font-bold px-4 py-3 rounded-full bg-[#11F428]
           hover:bg-gray-bg_primary hover:text-[#11F428] hover:text-xl ease-in-out duration-300 ml-3"
                >
                  Sign In
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
