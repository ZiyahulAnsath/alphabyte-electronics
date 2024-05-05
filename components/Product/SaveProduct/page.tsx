"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "@/slices/productSlice";
import ImageUploader from "../common/ImageUploader/page";
import AllBrands from "@/components/common/AllBrands/page";
import AllModels from "@/components/common/AllModels/page";
import AllCategories from "@/components/common/AllCategories/page";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import LaptopBody from "./LaptopBody/page";
import Accordion from "../common/Accordion/page";
import AccordionItem from "../common/AccordionItem/page";
import LaptopDisplay from "./LaptopDisplay/page";
import LaptopPlatform from "./LaptopPlatform/page";
import LaptopMemory from "./LaptopMemory/page";
import LaptopSound from "./LaptopSound/page";
import LaptopCommons from "./LaptopCommons/page";
import LaptopFeatures from "./LaptopFeatures/page";
import LaptopBattery from "./LaptopBattery/page";
import LaptopMisc from "./LaptopMisc/page";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    category: "",
    brand: "",
    productModel: "",
    name: "",
    generation: "",
    description: "",
    quantity: 0,
    price: 0,
    images: [],
    body: {
      dimension: "",
      weight: "",
      build: "",
      sim: "",
    },
    display: {
      displayType: "",
      size: "",
      webcam: "",
      touchpad: "",
      hz: "",
    },
    platform: {
      os: "",
      chipset: "",
      cpu: "",
      gpu: "",
      gpuCapacity: "",
    },
    memory: {
      hdd: {
        hddType: "",
        capacity: "",
      },
      ram: {
        capacity: "",
        ddr: "",
        factor: "",
        speed: "",
        storageSupport: "",
      },
    },
    sound: {
      audio: "",
      chip: "",
      speakers: "",
      microphone: "",
    },
    commons: {
      wlan: "",
      bluetooth: "",
      type_c: "",
      usb: "",
      cardReader: "",
      hdmi: "",
      ethernet: "",
      headphoneJack: "",
    },
    features: {
      fingerprint: "",
      iris: "",
      keyboard: "",
    },
    battery: {
      batteryType: "",
      adaptorType: "",
      hour: "",
    },
    misc: {
      color: "",
      warranty: "",
    },
    reviews: [],
  });

  const handleDataChange = (section: any, data: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: data,
    }));
  };

  const handleMemoryDataChange = (memoryData: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      memory: {
        ...prevFormData.memory,
        ...memoryData,
      },
    }));
  };
  const handleSaveProduct = async () => {
    try {
      await dispatch(createProduct(formData));
      console.log("Product saved successfully");
      window.location.reload();
      //  Reset form fields after successful submission if needed
    } catch (error) {
      console.error("Error saving product:", error);
    }
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
        {/* Form fields */}
        <div className="mb-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:flex-row md:gap-5.5">
          {/* Category Input Box */}
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Select Category
            </label>
            <AllCategories
              setSelectedCategory={(category) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  category,
                }));
              }}
            />
          </div>
          {/* Brand Input Box */}
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Select Brand
            </label>
            <AllBrands
              setSelectedBrand={(brand) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  brand,
                }))
              }
            />
          </div>
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Select Model
            </label>
            <AllModels
              setSelectedModel={(model) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  productModel: model,
                }))
              }
            />
          </div>
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              onChange={(e) => handleDataChange("name", e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              onChange={(e) => handleDataChange("quantity", e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="block pb-2 text-sm font-medium text-black dark:text-white">
              Price (LKR)
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={(e) => handleDataChange("price", e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Product Description"
            onChange={(e) => handleDataChange("description", e.target.value)}
            rows={10}
            className=" mb-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Generation
          </label>
          <textarea
            name="generation"
            placeholder="Generation"
            onChange={(e) => handleDataChange("generation", e.target.value)}
            className=" mb-4 w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        {/* Image Upload */}
        {/* <ImageUploader onImageUpload={handleImageUpload} /> */}
        {/* Accordion for additional product details */}

        {/* <div className="container mx-auto">
          <Accordion>
            <AccordionItem title="Laptop Body">
              <LaptopBody onBodyDataChange={(bodyData:any) => handleDataChange("body", bodyData)}/>
            </AccordionItem>
            <AccordionItem title="Laptop Display">
              <LaptopDisplay onDisplayDataChange={(displayData:any)=> handleDataChange("display", displayData)}/>
            </AccordionItem>
            <AccordionItem title="Laptop Platform">
              <LaptopPlatform onPlatformDataChange={(platformData:any)=>{handleDataChange("platform", platformData)}}/>
            </AccordionItem>
            <AccordionItem title="Laptop Memory">
              <LaptopMemory  onMemoryDataChange={handleMemoryDataChange}/>
            </AccordionItem>
            <AccordionItem title="Laptop Sound ">
              <LaptopSound onSoundChange={(soundData:any)=>{handleDataChange("sound",soundData)}}/>
            </AccordionItem>
            <AccordionItem title="Laptop Commons">
              <LaptopCommons onCommonsData={(commonsData:any)=>{handleDataChange("commons",commonsData)}}/>
            </AccordionItem>
            <AccordionItem title="Laptop Features">
              <LaptopFeatures onFeaturesData={(featuresData:any)=>{handleDataChange("features",featuresData)}}/>
            </AccordionItem>
            <AccordionItem title="Laptop Battery">
              <LaptopBattery onBatteryData={(batteryData:any)=>{handleDataChange("battery",batteryData)}}/>
            </AccordionItem>
            <AccordionItem title="Laptop Misc">
              <LaptopMisc onMiscData={(miscData:any)=>{handleDataChange("misc",miscData)}}/>
            </AccordionItem>
          </Accordion>
        </div> */}
        {/* Accordion for additional product details */}
        {formData.category.toLowerCase() === "laptop" && (
          <div className="container mx-auto">
            <Accordion>
              <AccordionItem title="Laptop Body">
                <LaptopBody
                  onBodyDataChange={(bodyData: any) =>
                    handleDataChange("body", bodyData)
                  }
                />
              </AccordionItem>
              <AccordionItem title="Laptop Display">
                <LaptopDisplay
                  onDisplayDataChange={(displayData: any) =>
                    handleDataChange("display", displayData)
                  }
                />
              </AccordionItem>
              <AccordionItem title="Laptop Platform">
                <LaptopPlatform
                  onPlatformDataChange={(platformData: any) => {
                    handleDataChange("platform", platformData);
                  }}
                />
              </AccordionItem>
              <AccordionItem title="Laptop Memory">
                <LaptopMemory onMemoryDataChange={handleMemoryDataChange} />
              </AccordionItem>
              <AccordionItem title="Laptop Sound ">
                <LaptopSound
                  onSoundChange={(soundData: any) => {
                    handleDataChange("sound", soundData);
                  }}
                />
              </AccordionItem>
              <AccordionItem title="Laptop Commons">
                <LaptopCommons
                  onCommonsData={(commonsData: any) => {
                    handleDataChange("commons", commonsData);
                  }}
                />
              </AccordionItem>
              <AccordionItem title="Laptop Features">
                <LaptopFeatures
                  onFeaturesData={(featuresData: any) => {
                    handleDataChange("features", featuresData);
                  }}
                />
              </AccordionItem>
              <AccordionItem title="Laptop Battery">
                <LaptopBattery
                  onBatteryData={(batteryData: any) => {
                    handleDataChange("battery", batteryData);
                  }}
                />
              </AccordionItem>
              <AccordionItem title="Laptop Misc">
                <LaptopMisc
                  onMiscData={(miscData: any) => {
                    handleDataChange("misc", miscData);
                  }}
                />
              </AccordionItem>
            </Accordion>
          </div>
        )}
        {/* Save Button */}

        <div className="mt-4 flex justify-end">
          <button
            className="mb-10 mt-5 flex  items-center gap-2 rounded-md bg-primary px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
            onClick={handleSaveProduct}
          >
            Save Product
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
