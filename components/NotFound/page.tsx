import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoReloadSharp } from "react-icons/io5";

const NotFound = () => {
  return (
    <>
      <div className="px-10 md:py-10">
        <div className="glossy_hero rounded-lg  text-grey-text  shadow-default dark:border-strokedark dark:bg-boxdark py-10">
          <h1 className="text-center text-3xl font-bold text-green-text">PAGE IS NOT-FOUND....!</h1>
          <div className="flex md:flex-nowrap flex-wrap-reverse items-center">
            <div className="w-full md:w-3/5">
              <div className="px-26 text-center">
                <p className="2xl:px-20">
                  This page is not available for my Alphabyte Electronics Compuer Shop reload or welcome back to the Home Page
                </p>

                <span className="mt-15 inline-block">
                  <Image
                    src={"/images/illustration/notfound.svg"}
                    alt="Logo"
                    width={100}
                    height={100}
                    layout="responsive" 
                    objectFit="cover"
                  />
                </span>
              </div>
            </div>

            <div className="w-full border-stroke md:w-2/5 border-l-2 dark:border-strokedark">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-4 text-xl font-bold sm:text-title-xl2text-white">
                  Redirect to HOME Page
                </h2>
                <div className="pb-4">
                  <div className="flex items-center flex-nowrap">
                    <Link
                      href={"/"}
                      className="text-xl bg-green-text font-bold hover:text-green-text text-grey-bg_primary hover:font-semibold ease-linear duration-300 border-none hover:bg-grey-bg_primary px-5 py-1.5 rounded-md flex items-center"
                    >
                      Click to HOME
                      <IoReloadSharp className="w-6 h-6 ml-4"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
