'use client'

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoMdAddCircleOutline } from "react-icons/io";

const Models: React.FC<{ setSelectedModel: (model: string) => void }> = ({ setSelectedModel }) => {
    const [selectedModel, setSelectedModelLocal] = useState<string>("");
    const [isModelSelected, setIsModelSelected] = useState<boolean>(false);
    
    const changeModelTextColor = () => {
        setIsModelSelected(true);
    };
    
    const models: string[] = ["Swift", "ROG", "XPS"];

    return (
        <div className="flex gap-2">
            <div className="basis-3/4">
                <div className="relative z-20 bg-white dark:bg-form-input">
                    <select
                        value={selectedModel}
                        onChange={(e) => {
                            setSelectedModelLocal(e.target.value);
                            setSelectedModel(e.target.value);
                            changeModelTextColor();
                        }}
                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-6 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                            isModelSelected ? "text-black dark:text-white" : ""
                        }`}
                    >
                        <option value="" disabled>
                            Select Model
                        </option>
                        {models.map((model, index) => (
                            <option key={index} value={model}>
                                {model}
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
                    href={"/manage_section/model"}
                    className={`group relative flex items-center gap-2.5 rounded-sm bg-graydark px-4 py-3 font-medium text-blue-300 duration-300 ease-in-out hover:bg-slate-800 hover:text-white dark:hover:bg-meta-4`}
                >
                    <IoMdAddCircleOutline className="h-5 w-5 text-blue-300 dark:text-meta-3" />
                </Link>
            </div>
        </div>
    );
};

export default Models;
