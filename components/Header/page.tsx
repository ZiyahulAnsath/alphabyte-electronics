"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Badge } from "antd";
import MobileMenu from "./MobileHeader/page";
import { FaCartPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import DropdownUserAccount from "./DropdownUserAccount";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";


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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Effect to check if user is already logged in when component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Set isLoggedIn to false
    // navigate("/"); // Redirect to home page after logout
    // toast("Logged out from application!", {
    //   icon: "😔",
    // });
  };

  return (
    <nav className="w-full bg-grey-bg_primary shadow-md">
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <div className="flex h-full w-full items-center justify-between px-4">
          <div className="mb-2 mt-1 cursor-pointer">
            <Link href={"/"}>
              <Image
                src={"/images/logo/logo.svg"}
                alt="logo"
                width={200}
                height={100}
              />
            </Link>
          </div>
          <ul className="flex cursor-pointer list-none gap-6">
            {Links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  passHref
                  className={`focus:text-green-00 text-lg text-grey-text hover:font-semibold hover:text-green-text active:text-green-text `}
                >
                  {link.menuName}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <HiOutlineDevicePhoneMobile className="h-7 w-7 text-green-text" />
              <Link
                href={"#"}
                className="text-grey-text hover:font-semibold hover:text-green-text"
              >
                +94 758412456
              </Link>
            </div>
            <div className="flex items-center gap-5">
              {isLoggedIn ? (
                <>
                  <Link
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-4"
                    href="#"
                  >
                    <span className="hidden text-right lg:block">
                      <span className="block text-sm font-medium">
                        Ziyahul Ansath
                      </span>
                    </span>

                    <span className="h-12 w-12 rounded-full">
                      <Image
                        width={112}
                        height={112}
                        src={"/images/user/user-01.png"}
                        style={{
                          width: "auto",
                          height: "auto",
                        }}
                        alt="User"
                      />
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <Link href={"/auth/signin"}>
                    <div className="glossy_icon hover:text-green-text">
                      <FaRegUser className="h-5 w-5" />
                    </div>
                  </Link>
                </>
              )}

              <Link href={"/cart"}>
                <Badge count={10} color="green">
                  <div className="glossy_icon hover:text-green-text">
                    <FaCartPlus className="h-5 w-5" />
                  </div>
                </Badge>
              </Link>
              <div className="glossy_icon hover:text-green-text">
                <IoSearch className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Dropdown User Account */}
      <DropdownUserAccount
        dropdownOpen={dropdownOpen}
        handleLogout={handleLogout}
      />
    </nav>
  );
};

export default DefaultHeader;
