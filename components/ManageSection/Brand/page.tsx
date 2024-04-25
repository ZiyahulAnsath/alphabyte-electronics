"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { CiSaveUp1 } from "react-icons/ci";

const Brand = () => {
  return (
    <>
      <Breadcrumb pageName="Brand" />
      <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <label className="block pl-6.5 pt-6.5 text-sm font-medium text-black dark:text-white">
          Add New Brand
        </label>
        <div className="flex flex-row gap-5.5 p-6.5">
            <div className="basis-1/2">
              <input
                type="text"
                placeholder="Brand Name"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="basis-1/4">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-10 py-3 text-center font-medium text-white hover:bg-body lg:px-8 xl:px-10"
              >
                <CiSaveUp1 className="h-6 w-6 " />
                Save Brand
              </Link>
                </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
