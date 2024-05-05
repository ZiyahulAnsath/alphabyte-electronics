"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { createBrand, getAllBrands } from "@/slices/brandSlice";
import Link from "next/link";
import { useState } from "react";
import { CiSaveUp1 } from "react-icons/ci";
import { useDispatch } from "react-redux";

const Brand = () => {
  const dispatch = useDispatch();

  const [brandName, setBrandName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const uppercaseBrandName = brandName.toUpperCase();

      await dispatch(createBrand({ name: uppercaseBrandName }));
      setSuccessMessage(`Brand "${uppercaseBrandName}" saved successfully.`);
      setBrandName("");
      dispatch(getAllBrands());
    } catch (error) {
      console.error("Error saving brand:", error);
    }
  };

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
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="basis-1/4">
            {/* Button to save Brand */}
            <button
              className="mb-10 flex  items-center gap-2 rounded-md bg-primary px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
              onClick={handleSubmit} // Call handleSubmit function on button click
            >
              <CiSaveUp1 className="h-5 w-5 hover:text-meta-3" />
              Save Brand
            </button>
          </div>
        </div>
      </div>
      {/* Display success message */}
      {successMessage && (
        <div
          className="relative mt-5 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
          <span className="absolute bottom-0 right-0 top-0 px-4 py-3">
            <svg
              className="h-6 w-6 fill-current text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.293 13.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L12.586 7H4a1 1 0 0 0 0 2h8.586l-3.293 3.293z"
              />
            </svg>
          </span>
        </div>
      )}
    </>
  );
};

export default Brand;
