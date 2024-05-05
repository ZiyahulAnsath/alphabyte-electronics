"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getAllBrands } from "@/slices/brandSlice";


const Brands: React.FC<{ setSelectedBrand: (brand: string) => void }> = ({
  setSelectedBrand,
}) => {
  const [selectedBrand, setSelectedBrandLocal] = useState<string>("");
  const [isBrandSelected, setIsBrandSelected] = useState<boolean>(false);

  const changeBrandTextColor = () => {
    setIsBrandSelected(true);
  };

  const dispatch = useDispatch();
    const brands = useSelector((state:RootState) => state.brand.brands);

    useEffect(()=>{
        dispatch(getAllBrands());
    },[dispatch])
    
  return (
    <div className="flex gap-2">
      <div className="basis-3/4">
        <div className="relative z-20 bg-white dark:bg-form-input">
          <select
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrandLocal(e.target.value);
              setSelectedBrand(e.target.value);
              changeBrandTextColor();
            }}
            className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-6 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
              isBrandSelected ? "text-black dark:text-white" : ""
            }`}
          >
            <option value="" disabled>
              Select Brand
            </option>
            {brands.map((brand:any) => (
              <option key={brand._id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
          <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
            <IoIosArrowDown className="h-5 w-5" />
          </span>
        </div>
      </div>
      <div>
        <Link
          href={"/dashboard/manage_section/brand"}
          className={`group relative flex items-center gap-2.5 rounded-sm bg-graydark px-4 py-3 font-medium text-blue-300 duration-300 ease-in-out hover:bg-slate-800 hover:text-white dark:hover:bg-meta-4`}
        >
          <IoMdAddCircleOutline className="h-5 w-5 text-blue-300 dark:text-meta-3" />
        </Link>
      </div>
    </div>
  );
};

export default Brands;
