import Link from "next/link";
import React from "react";

const FillterHeading = () => {
  return (
    <>
      <div className="flex flex-row gap-4 items-center">
        <div>
          <h1 className=" text-2xl">Category Type</h1>
        </div>
        <div>
          <Link
            href={"/"}
            className=" text-gray-text hover:text-green-text hover:font-semibold ease-in-out duration-500 border-none hover:ring-green-text  ring-2 px-4 ring-gray-text py-2 hover:bg-transparent rounded-full"
          >
            All
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
            className=" text-gray-text hover:text-green-text hover:font-semibold ease-in-out duration-500 border-none hover:ring-green-text  ring-2 px-4 ring-gray-text py-2 hover:bg-transparent rounded-full"
          >
            Special offer
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
            className=" text-gray-text hover:text-green-text hover:font-semibold ease-in-out duration-500 border-none hover:ring-green-text  ring-2 px-4 ring-gray-text py-2 hover:bg-transparent rounded-full"
          >
            New Arrivals
          </Link>
        </div>
      </div>
    </>
  );
};

export default FillterHeading;
