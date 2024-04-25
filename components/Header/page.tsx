"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "antd";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileHeader/page";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Links = [
  {
    menuName: "Home",
    path: "/",
  },
  {
    menuName: "Services",
    path: "/services",
  },
  {
    menuName: "Gallery",
    path: "/gallery",
  },
  {
    menuName: "Contact",
    path: "/contact",
  },
];

const DefaultHeader = () => {
  const router = useRouter();

  const handleCart = () => {
    router.push("/cart");
  };

  return (
    <nav className="w-full shadow-sm shadow-gray-500 mb-2">
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <div className="flex justify-between items-center h-full px-4 w-full">
          <div className="cursor-pointer mb-2 mt-1">
            <Link href={"/"}>
              <Image src={"/images/logo/logo.svg"} alt="logo" width={200} height={100} />
            </Link>
          </div>
          <ul className="flex gap-6 list-none cursor-pointer">
            {Links.map((link,index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  passHref 
                  className={`text-lg text-grey-text hover:text-green-text hover:font-semibold active:text-green-text focus:text-green-00 `}
                >
                  {link.menuName}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
              <HiOutlineDevicePhoneMobile className="h-7 w-7 text-green-text" />
              <Link
                href={"#"}
                className="hover:text-green-text hover:font-semibold text-grey-text" 
              >
                +94 777777777
              </Link>
            </div>
            <div className="flex gap-5 items-center">
              <div className="glossy_icon hover:text-green-text">
                <FaRegUser className="h-5 w-5" />
              </div>
              <Badge count={10} color="green">
                <div className="glossy_icon hover:text-green-text">
                  <FaCartPlus className="w-5 h-5" onClick={handleCart} />
                </div>
              </Badge>
              <div className="glossy_icon hover:text-green-text">
                <IoSearch className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </nav>
  );
};

export default DefaultHeader;