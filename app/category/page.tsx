"use client";
import FillterCardComponent from "@/components/CardComponent/FillterCardComponent/page";
import Categories from "@/components/Categories/page";
import FillterHeading from "@/components/FillterComponent/Common/FillterHeading/page";
import FillterComponent from "@/components/FillterComponent/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import { ArrowLeftIcon, Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isInStock = true;
  return (
    <>
      <Header />
      {/* End Main Header */}

      <div className="flex flex-row gap-3">
        <div className="hidden lg:block basis-1/6">
          <Categories />
        </div>

        <div className="w-full px-5 lg:px-2">
          <FillterHeading />
          <div className="flex flex-row gap-3 py-5 ">
            <div className="basis-1/6 border-r-2 border-green-text  ">
              <div className="lg:block hidden">
                <FillterComponent />
              </div>

              {/* Start Tablet, mobile responsiveness */}
              <div className="block lg:hidden ">
                <div
                  className={`md:w-${isOpen ? "" : "2/12"} w-${
                    isOpen ? "" : "2/12"
                  } float-left pr-3  ${
                    isOpen ? " text-gray-200" : "bg-transparent"
                  }`}
                >
                  <div
                    onClick={toggleMenu}
                    className={`flex ${
                      isOpen ? "justify-end" : "justify-between"
                    } `}
                  >
                    {isOpen ? (
                      <>
                        <ArrowLeftIcon className="w-8 h-8 hover:text-green-text ease-in-out duration-150" />
                      </>
                    ) : (
                      <>
                        <Bars3BottomRightIcon className="w-8 h-8 hover:text-green-text ease-in-out duration-150" />
                      </>
                    )}
                  </div>
                  {isOpen && (
                    <div className="top-0 left-0 min-h-screen w-full bg-transparent p-3 transition-all duration-300">
                      <FillterComponent />
                    </div>
                  )}
                </div>
              </div>
              {/* End  Tablet, mobile responsiveness */}
            </div>

            <div className="w-full lg:px-3 px-0">
              <FillterCardComponent isInStock={isInStock} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* End Footer */}
    </>
  );
};

export default Category;
