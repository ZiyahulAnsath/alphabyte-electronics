'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getAllCategories } from "@/slices/categorySlice";


const Categories: React.FC<{ setSelectedCategory: (category: string) => void }> = ({ setSelectedCategory }) => {
    const [selectedCategory, setSelectedCategoryLocal] = useState<string>("");
    const [isCategorySelected, setIsCategorySelected] = useState<boolean>(false);

    const changeCategoryTextColor = () => {
        setIsCategorySelected(true);
    };

    const dispatch = useDispatch();
    const categories = useSelector((state:RootState) => state.category.categories);

    useEffect(()=>{
        dispatch(getAllCategories());
    },[dispatch])
    


    return (
        <div className="flex gap-2">
            <div className="basis-3/4">
                <div className="relative z-20 bg-white dark:bg-form-input">
                    <select
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategoryLocal(e.target.value);
                            setSelectedCategory(e.target.value);
                            changeCategoryTextColor();
                        }}
                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-6 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                            isCategorySelected ? "text-black dark:text-white" : ""
                        }`}
                    >
                        <option value="" disabled>
                            Select Category
                        </option>
                        {categories.map((category:any) => (
                            <option key={category._id} value={category.name}>
                                {category.name}
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
                    href={"/dashboard/manage_section/category"}
                    className={`group relative flex items-center gap-2.5 rounded-sm bg-graydark px-4 py-3 font-medium text-blue-300 duration-300 ease-in-out hover:bg-slate-800 hover:text-white dark:hover:bg-meta-4`}
                >
                    <IoMdAddCircleOutline className="h-5 w-5 text-blue-300 dark:text-meta-3" />
                </Link>
            </div>
        </div>
    );
};

export default Categories;
