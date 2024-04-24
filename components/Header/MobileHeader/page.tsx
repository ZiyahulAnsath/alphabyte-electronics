"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "antd";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const links = ["Home", "Categories", "Services", "Gallery", "Contact"];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu */}

      <div className="sm:block md:hidden">
        <div className="flex gap-2 items-center w-full justify-center min-h-12">
          <HiOutlineDevicePhoneMobile className="h-6 w-6 text-green-text" />

          <Link
            href={"#"}
            className=" hover:text-green-text hover:font-semibold"
          >
            +94 777777777
          </Link>
        </div>
        <div className="w-full flex justify-between items-center px-5">
          <div className="relative">
            <Badge count={5} className=" absolute ">
              <div className="rounded-2xl p-2 bg-green-text">
                <FaCartPlus className="h-8 w-8 text-gray-950 pt-1" />
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
            <IoSearch className="h-6 w-6 text-gray-text hover:text-green-text" />
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center px-5 shadow-sm shadow-blue-100">
              <div className="mb-2">
                {" "}
                <Link href={"/"}>
                  <Image src={"/logo/logo.svg"} alt="logo" width={150} height={100} />
                </Link>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 transform transition-transform ${
                    isOpen ? "-rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  onClick={toggleAccordion}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
            </div>
            {isOpen && (
              <div className="px-5 py-3 bg-gray-900 ">
                {/* Mobile Menu Links */}
                <ul>
                  {links.map((link) => (
                    <li
                      key={link}
                      className="pl-4 py-3 text-sm font-bold
                hover:text-[#11F428] text-gray-text"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={link.toLowerCase()}>{link}</Link>
                    </li>
                  ))}
                  <li
                    className="w-[30%] mt-3 text-center text-gray-bg_primary font-bold py-2 rounded-full bg-[#11F428] hover:ring-2 ring-gray-text
           hover:bg-gray-bg_primary hover:text-[#11F428] hover:text-lg ease-in-out duration-300 ml-3 shadow-md"
                  >
                    Sign In
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
