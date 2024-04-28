"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import ImageUploader from "../common/ImageUploader/page";
import Accordion from "../common/Accordion/page";
import AccordionItem from "../common/AccordionItem/page";
import LaptopBody from "./LaptopBody/page";
import LaptopDisplay from "./LaptopDisplay/page";
import LaptopPlatform from "./LaptopPlatform/page";
import LaptopBattery from "./LaptopBattery/page";
import LaptopMemory from "./LaptopMemory/page";
import LaptopSound from "./LaptopSound/page";
import LaptopCommons from "./LaptopCommons/page";
import LaptopFeatures from "./LaptopFeatures/page";
import LaptopMisc from "./LaptopMisc/page";
import { CiSaveUp1 } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import AllBrands from "@/components/common/AllBrands/page";
import AllModels from "@/components/common/AllModels/page";
import AllCategories from "@/components/common/AllCategories/page";

const AddNewProduct: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const validateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    let quantity = parseInt(e.target.value);
    if (quantity <= 0 || isNaN(quantity)) {
      e.target.value = "1";
    }
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    console.log("Selected Brand:", brand);
  };
  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    console.log("Selected Model:", model);
  };
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };

  return (
    <>
      <Breadcrumb pageName="Add New Product" />
      <div className="mt-4 flex items-center justify-end">
        <Link
          href={"/dashboard/products/manage_products"}
          className="mb-5 flex items-center  gap-2 rounded-md bg-primary px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
        >
          <GoArrowUpRight className="h-5 w-5 " />
          Manage Products
        </Link>
      </div>
      <div className="rounded-lg border border-stroke bg-white p-6.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mb-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:flex-row md:gap-5.5">
          {/* Category Input Box */}
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Select Category
            </label>
            <AllCategories setSelectedCategory={handleCategoryChange} />
          </div>
          {/* Brand Input Box */}
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Select Brand
            </label>
            <AllBrands setSelectedBrand={handleBrandChange} />
          </div>
          {/* Model Input Box */}
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Select Model
            </label>
            <AllModels setSelectedModel={handleModelChange} />
          </div>
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Quantity
            </label>
            <input
              type="number"
              placeholder="Quantity"
              onChange={validateQuantity}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Price (LKR)
            </label>
            <input
              type="number"
              placeholder="Price"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Description
          </label>
          <textarea
            placeholder="Product Description"
            rows={10}
            className=" mb-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <ImageUploader />
        <div className="container mx-auto">
          <Accordion>
            <AccordionItem title="Laptop Body">
              <LaptopBody />
            </AccordionItem>
            <AccordionItem title="Laptop Display">
              <LaptopDisplay />
            </AccordionItem>
            <AccordionItem title="Laptop Platform">
              <LaptopPlatform />
            </AccordionItem>
            <AccordionItem title="Laptop Memory">
              <LaptopMemory />
            </AccordionItem>
            <AccordionItem title="Laptop Sound ">
              <LaptopSound />
            </AccordionItem>
            <AccordionItem title="Laptop Commons">
              <LaptopCommons />
            </AccordionItem>
            <AccordionItem title="Laptop Features">
              <LaptopFeatures />
            </AccordionItem>
            <AccordionItem title="Laptop Battery">
              <LaptopBattery />
            </AccordionItem>
            <AccordionItem title="Laptop Misc">
              <LaptopMisc />
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="mb-10 mt-5 flex  items-center gap-2 rounded-md bg-primary px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10">
            <CiSaveUp1 className="h-5 w-5 hover:text-meta-3" />
            Save Product
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
