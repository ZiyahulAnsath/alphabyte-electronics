import Link from "next/link";
import React from "react";

const FillterHeading = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row space-x-8 items-center ">
          <h1 className="text-3xl font-bold">Category Type</h1>
        <div className="flex flex-wrap gap-3 gap-y-8 py-4">
          <div>
            <Link
              href={"/"}
              className=" text-grey-text hover:text-green-text hover:font-semibold ease-in-out duration-500 border-none hover:ring-green-text  ring-2 px-4 ring-grey-text py-2 hover:bg-transparent rounded-full text-[14px] "
            >
              All
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className=" text-grey-text hover:text-green-text hover:font-semibold ease-in-out duration-500 border-none hover:ring-green-text  ring-2 px-4 ring-grey-text py-2 hover:bg-transparent rounded-full text-[14px] "
            >
              Special offer
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className=" text-grey-text hover:text-green-text hover:font-semibold ease-in-out duration-500 border-none hover:ring-green-text  ring-2 px-4 ring-grey-text py-2 hover:bg-transparent rounded-full text-[14px] "
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FillterHeading;
