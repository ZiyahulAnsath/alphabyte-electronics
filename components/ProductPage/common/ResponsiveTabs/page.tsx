"use client";

import { useState } from "react";
import { Bars3Icon, EyeIcon } from "@heroicons/react/16/solid";
import { SplitCellsOutlined } from "@ant-design/icons";
import Link from "next/link";

const tabs = [
  { id: "specification", label: "Specification", icon: Bars3Icon },
  { id: "review", label: "Review", icon: EyeIcon },
  { id: "compare", label: "Compare", icon: SplitCellsOutlined },
];

const ResponsiveTabs = () => {
  const [activeTab, setActiveTab] = useState("specification");

  const handleTabClick = (tabId) => {
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
