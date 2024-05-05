"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory, getAllCategories } from "@/slices/categorySlice";
import { CiSaveUp1 } from "react-icons/ci";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

const Category = () => {
  const dispatch = useDispatch();
  // State variables to store form data and success message
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      const uppercaseCategoryName = categoryName.toUpperCase();
      await dispatch(
        createCategory({ name: uppercaseCategoryName, imageUrl: imageUrl }),
      );
      setSuccessMessage(
        `Category "${uppercaseCategoryName}" created successfully.`,
      );
      dispatch(getAllCategories());
      setCategoryName("");
      setImageUrl("");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };
  return (
    <>
      <Breadcrumb pageName="Category" />
      {/* Category form */}
      <div className="rounded-lg border border-stroke bg-white px-5 py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
        <h2 className="mb-5 text-xl font-semibold">Add New Category</h2>
        <div className="mb-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:flex-row md:gap-5.5">
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Category Name"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
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
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-end">
            {/* Button to save category */}
            <button
              className="mb-10 mt-5 flex  items-center gap-2 rounded-md bg-primary px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
              onClick={handleSubmit} // Call handleSubmit function on button click
            >
              <CiSaveUp1 className="h-5 w-5 hover:text-meta-3" />
              Save Category
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

export default Category;
