"use client";
import FillterCardComponent from "@/components/CardComponent/FillterCardComponent/page";
import FillterHeading from "@/components/FillterComponent/Common/FillterHeading/page";
import FillterComponent from "@/components/FillterComponent/page";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";

const Laptop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isInStock = true;
  return (
    <>
      <div className="flex flex-row gap-3">
        <div className="w-full">
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
                        <FaArrowLeft className="w-8 h-8 hover:text-green-text ease-in-out duration-150" />
                      </>
                    ) : (
                      <>
                        <HiMiniBars3 className="w-8 h-8 hover:text-green-text ease-in-out duration-150" />
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
    </>
  );
};

export default Laptop;
