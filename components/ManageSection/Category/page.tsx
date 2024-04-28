"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

import { CiSaveUp1 } from "react-icons/ci";

const Category = () => {
  return (
    <>
      <Breadcrumb pageName="Category" />
      <div className="rounded-lg border border-stroke bg-white px-5 py-4 shadow-default dark:border-strokedark  dark:bg-boxdark">
        <h2 className="text-xl font-semibold mb-5">Add New Category</h2>
        <div className="mb-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:flex-row md:gap-5.5">
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Category Name"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Image Url"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className="mt-2 flex justify-end">
            <button className="mb-10 mt-5 flex  items-center gap-2 rounded-md bg-primary px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10">
              <CiSaveUp1 className="h-5 w-5 hover:text-meta-3" />
              Save Category
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
