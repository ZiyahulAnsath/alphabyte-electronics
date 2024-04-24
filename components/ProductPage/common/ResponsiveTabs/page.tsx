"use client";
import Link from "next/link";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineCompare } from "react-icons/md";


const tabs = [
  { id: "specification", label: "Specification", icon: HiMiniBars3 },
  { id: "review", label: "Review", icon: IoEyeOutline },
  { id: "compare", label: "Compare", icon: MdOutlineCompare },
];

const ResponsiveTabs = ({activeTab, setActiveTab}:any) => {
  
  const handleTabClick = (tabId:any) => {
    setActiveTab(tabId);
  };


  return (
    <>
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={`#${tab.id}`}
          className={`flex w-1/3 items-center justify-center h-10 rounded ${
            activeTab === tab.id
              ? "bg-gray-bg_primary text-green-text border-green-text border-2"
              : "border border-green-text hover:border-green-text hover:border-2 hover:bg-gray-bg_primary hover:text-green-text"
          }`}
          onClick={() => handleTabClick(tab.id)}
        >
          <div className="flex flex-nowrap gap-2">
            <tab.icon className="h-6 w-6" />
            <h2 className="text-sm">{tab.label}</h2>
          </div>
        </Link>
      ))}

      
    </>
  );
};

export default ResponsiveTabs;

