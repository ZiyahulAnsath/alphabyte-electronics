"use client";

import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import lgo1 from "@/public/1.png";
import lgo2 from "@/public/2.png";
import lgo3 from "@/public/3.png";
import Link from "next/link";

const FillterCardComponent = ({ isInStock }) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 lg:gap-8">
        <div className="glossy_brand flex flex-col mb-3 hover:font-semibold hover:shadow-xl hover:shadow-green-text/60">
          <div className="relative">
            <Image
              src={lgo1}
              alt="card"
              className="px-8"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "25px 25px 0px 0px",
              }}
            />
            <div className="border-b-4 border-gray-bg_primary"></div>
            <div className="absolute top-0 px-5 py-5">
              <div
                className={`rounded-full px-5 py-2 text-xs bg-gray-bg_primary ${
                  isInStock ? "text-green-text" : " text-red-500"
                }`}
              >
                {isInStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </div>
          <div className="px-3 py-5 ">
            <div className="flex flex-row gap-3 items-center">
              <div className="w-10/12">
                <Link
                  href={`/#`}
                  className=" hover:text-green-text  hover:underline ease-in-out duration-700"
                >
                  <h3>Lenovo Ideapad Slim 3 Core i5 13th Gen </h3>
                </Link>
              </div>
              <div className="w-3/12 flex items-center justify-center">
                <div className="card_icon rounded-full border p-3  hover:text-green-text">
                  <ShoppingCartIcon className="h-6 w-6 " />
                </div>
              </div>
            </div>
            <h3 className="text-green-text text-base font-extralight">
              Laptop
            </h3>
            <h3 className="text-2xl">450,000 LKR</h3>
          </div>
        </div>
        <div className="glossy_brand flex flex-col mb-3 hover:font-semibold hover:shadow-xl hover:shadow-green-text/60">
          <div className="relative">
            <Image
              src={lgo2}
              alt="card"
              className="px-8"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "25px 25px 0px 0px",
              }}
            />
            <div className="border-b-4 border-gray-bg_primary"></div>
            <div className="absolute top-0 px-5 py-5">
              <div
                className={`rounded-full px-5 py-2 text-xs bg-gray-bg_primary ${
                  isInStock ? "text-green-text" : "text-red-500"
                }`}
              >
                {isInStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </div>
          <div className="px-3 py-5">
            <div className="flex flex-row gap-3 items-center">
              <div className="w-10/12">
                <Link
                  href={`/#`}
                  className=" hover:text-green-text  hover:underline ease-in-out duration-700"
                >
                  <h3>Lenovo Ideapad Slim 3 Core i5 13th Gen </h3>
                </Link>
              </div>
              <div className="w-3/12 flex items-center justify-center">
                <div className="card_icon rounded-full border p-3  hover:text-green-text">
                  <ShoppingCartIcon className="h-6 w-6 " />
                </div>
              </div>
            </div>
            <h3 className="text-green-text text-base font-extralight">
              Laptop
            </h3>
            <h3 className="text-2xl">450,000 LKR</h3>
          </div>
        </div>
        <div className="glossy_brand flex flex-col mb-3 hover:font-semibold hover:shadow-xl hover:shadow-green-text/60">
          <div className="relative">
            <Image
              src={lgo3}
              alt="card"
              className="px-8"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "25px 25px 0px 0px",
              }}
            />
            <div className="border-b-4 border-gray-bg_primary"></div>
            <div className="absolute top-0 px-5 py-5">
              <div
                className={`rounded-full px-5 py-2 text-xs bg-gray-bg_primary ${
                  isInStock ? "text-green-text" : "text-red-500"
                }`}
              >
                {isInStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </div>
          <div className="px-3 py-5 ">
            <div className="flex flex-row gap-3 items-center">
              <div className="w-10/12">
                <Link
                  href={`/#`}
                  className=" hover:text-green-text  hover:underline ease-in-out duration-700"
                >
                  <h3>Lenovo Ideapad Slim 3 Core i5 13th Gen </h3>
                </Link>
              </div>
              <div className="w-3/12 flex items-center justify-center">
                <div className="card_icon rounded-full border p-3  hover:text-green-text">
                  <ShoppingCartIcon className="h-6 w-6 " />
                </div>
              </div>
            </div>
            <h3 className="text-green-text text-base font-extralight">
              Laptop
            </h3>
            <h3 className="text-2xl">450,000 LKR</h3>
          </div>
        </div>
        <div className="glossy_brand flex flex-col mb-3 hover:font-semibold hover:shadow-xl hover:shadow-green-text/60">
          <div className="relative">
            <Image
              src={lgo1}
              alt="card"
              className="px-8 grayscale hover:grayscale-0"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "25px 25px 0px 0px",
              }}
            />
            <div className="border-b-4 border-gray-bg_primary"></div>
            <div className="absolute top-0 px-5 py-5">
              <div
                className={`rounded-full px-5 py-2 text-xs bg-gray-bg_primary ${
                  isInStock ? "text-green-text" : " text-red-500"
                }`}
              >
                {isInStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </div>
          <div className="px-3 py-5 ">
            <div className="flex flex-row gap-3 items-center">
              <div className="w-10/12">
                <Link
                  href={`/#`}
                  className=" hover:text-green-text  hover:underline ease-in-out duration-700"
                >
                  <h3>Lenovo Ideapad Slim 3 Core i5 13th Gen </h3>
                </Link>
              </div>
              <div className="w-3/12 flex items-center justify-center">
                <div className="card_icon rounded-full border p-3  hover:text-green-text">
                  <ShoppingCartIcon className="h-6 w-6 " />
                </div>
              </div>
            </div>
            <h3 className="text-green-text text-base font-extralight">
              Laptop
            </h3>
            <h3 className="text-2xl">450,000 LKR</h3>
          </div>
        </div>
        <div className="glossy_brand flex flex-col mb-3 hover:font-semibold hover:shadow-xl hover:shadow-green-text/60">
          <div className="relative">
            <Image
              src={lgo2}
              alt="card"
              className="px-8"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "25px 25px 0px 0px",
              }}
            />
            <div className="border-b-4 border-gray-bg_primary"></div>
            <div className="absolute top-0 px-5 py-5">
              <div
                className={`rounded-full px-5 py-2 text-xs bg-gray-bg_primary ${
                  isInStock ? "text-green-text" : "text-red-500"
                }`}
              >
                {isInStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </div>
          <div className="px-3 py-5">
            <div className="flex flex-row gap-3 items-center">
              <div className="w-10/12">
                <Link
                  href={`/#`}
                  className=" hover:text-green-text  hover:underline ease-in-out duration-700"
                >
                  <h3>Lenovo Ideapad Slim 3 Core i5 13th Gen </h3>
                </Link>
              </div>
              <div className="w-3/12 flex items-center justify-center">
                <div className="card_icon rounded-full border p-3  hover:text-green-text">
                  <ShoppingCartIcon className="h-6 w-6 " />
                </div>
              </div>
            </div>
            <h3 className="text-green-text text-base font-extralight">
              Laptop
            </h3>
            <h3 className="text-2xl">450,000 LKR</h3>
          </div>
        </div>
        <div className="glossy_brand flex flex-col mb-3 hover:font-semibold hover:shadow-xl hover:shadow-green-text/60">
          <div className="relative">
            <Image
              src={lgo3}
              alt="card"
              className="px-8"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "25px 25px 0px 0px",
              }}
            />
            <div className="border-b-4 border-gray-bg_primary"></div>
            <div className="absolute top-0 px-5 py-5">
              <div
                className={`rounded-full px-5 py-2 text-xs bg-gray-bg_primary ${
                  isInStock ? "text-green-text" : "text-red-500"
                }`}
              >
                {isInStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </div>
          <div className="px-3 py-5 ">
            <div className="flex flex-row gap-3 items-center">
              <div className="w-10/12">
                <Link
                  href={`/#`}
                  className=" hover:text-green-text  hover:underline ease-in-out duration-700"
                >
                  <h3>Lenovo Ideapad Slim 3 Core i5 13th Gen </h3>
                </Link>
              </div>
              <div className="w-3/12 flex items-center justify-center">
                <div className="card_icon rounded-full border p-3  hover:text-green-text">
                  <ShoppingCartIcon className="h-6 w-6 " />
                </div>
              </div>
            </div>
            <h3 className="text-green-text text-base font-extralight">
              Laptop
            </h3>
            <h3 className="text-2xl">450,000 LKR</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FillterCardComponent;
