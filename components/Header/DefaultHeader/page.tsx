'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "../MobileHeader/page";
import {
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { Badge } from "antd";
import { useRouter } from "next/navigation";

const Links = ["Home", "Services", "Gallery", "Contact"];

const DefaultHeader = () => {

  const router = useRouter();
 const handleCart=()=>{
    router.push('/cart')
  }
  return (
    <nav className="w-full shadow-xl mb-5">
      {/* Desktop Menu */}
      <div className="hidden lg:block">
      <div className="flex justify-between items-center h-full px-4 w-full">
        <div className=" cursor-pointer">
          <Link href={"/"}>
            <Image src={"/test.png"} alt="logo" width={60} height={60} />
          </Link>
        </div>
        <ul className="flex gap-6 list-none cursor-pointer ">
          {Links.map((link) => (
            <li key={link}>
              <Link
                href={link.toLowerCase()}
                className=" text-lg text-gray-text hover:text-green-text hover:font-semibold active:text-green-text focus:text-green-00"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-5 cursor-pointer">
          <div className="flex gap-2 items-center ">
            <DevicePhoneMobileIcon className="h-7 w-7 text-green-text" />
            <Link
              href={"#"}
              className=" hover:text-green-text hover:font-semibold"
            >
              +94 777777777
            </Link>
          </div>
          <div className="flex gap-5 ">
            <div className="glossy_icon hidden lg:block hover:text-green-text">
              <UserIcon className="h-6 w-6" />
            </div>
            <Badge count={10} color="green">
              <div className="glossy_icon hidden lg:block hover:text-green-text">
                <ShoppingCartIcon className="w-6 h-6" onClick={handleCart}/>
              </div>
            </Badge>
            <div className="glossy_icon hidden lg:block hover:text-green-text">
              <MagnifyingGlassIcon className="w-6 h-6" />
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
