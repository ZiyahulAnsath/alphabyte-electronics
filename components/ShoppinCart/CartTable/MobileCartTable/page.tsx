"use client";
import { TrashIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React, { useState } from "react";
import lgo1 from "@/public/pixel.jpg";

const MobileCartTable = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (itemId: any, itemStatus: any) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }

    // Log details of the selected item
    console.log("Selected Item:", { id: itemId, status: itemStatus });
  };

  const handleSelectAll = () => {
    if (selectedItems.length === 3) {
      setSelectedItems([]);
    } else {
      setSelectedItems(["#1000", "#1001", "#1002"]);
    }
  };

  return (
    <>
      <div className="md:hidden">
        <div className="flex gap-3 mb-3  justify-end items-center">
          <input
            type="checkbox"
            checked={selectedItems.length === 3}
            onChange={handleSelectAll}
            className="size-5 text-green-text bg-black"
          />
          <label>Select All</label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {/* Map through items */}
          {[
            { id: "#1000", status: "Delivered" },
            { id: "#1001", status: "Shipped" },
            { id: "#1002", status: "Canceled" },
          ].map((item) => (
            <div
              key={item.id}
              className="glossy_hero space-y-3 p-4 rounded-lg shadow"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id, item.status)}
                  className="size-4 text-green-text bg-black"
                />
                <label className="text-">{item.id}</label>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="text-white">10/10/2021</div>
                <button
                  className="flex items-center gap-2 font-bold border-transparent rounded-lg px-1.5 py-1 uppercase tracking-wider text-red-800 bg-red-200"
                  //   onClick={() => handleDeleteRow(record.key)}
                >
                  Delete
                  <TrashIcon className="w-4 h-4 hover:h-6 hover:" />
                </button>
              </div>
              <div className="flex gap-3">
                <div>
                  <Image
                    src={lgo1}
                    alt="card"
                    className="w-20 h-20 border-transparent rounded-md"
                    style={{
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="text-sm text-white">
                  Kring New Fit office chair, mesh + PU, black
                </div>
              </div>

              <div className="text-sm font-medium text-white">200.00 LKR</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileCartTable;
