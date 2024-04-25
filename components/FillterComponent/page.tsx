"use client";
import Price from "./Common/Price/page";
import Stock from "./Common/Stock/page";
import React from "react";
import { Checkbox, Divider } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { laptopsFillter } from "@/data/laptopsFillter";

const FillterComponent = () => {
  const onChange = (e: CheckboxChangeEvent, dataId: string) => {
    console.log(`Checkbox with ID ${dataId} checked = ${e.target.checked}`);
  };

  return (
    <>
      {/* <div className="border-r-2 border-green-text "> */}
        <div className="pb-5 pr-2">
          <h1 className="text-2xl">Price</h1>
          <Price />
        </div>
        <div className="pb-5">
          <h1 className="text-2xl">Availability</h1>
          <Stock />
        </div>
        <div className="pb-5">
          {laptopsFillter.map((filterType) => (
            <div key={filterType.id} className="pb-5">
              <h1 className="text-2xl ">{filterType.name}</h1>
              {/* <div className="border-b-4 border-green-text w-20"></div> */}
              {filterType.type.map((data) => (
                <div className="flex flex-col" key={data.id}>
                  <Checkbox
                    onChange={(e) => onChange(e, data.name)}
                    className="text-grey-text font-semibold pb-2 hover:font-bold hover:text-green-text hover:pl-2 hover:ease-in-out duration-500`"
                  >
                    {data.name}
                  </Checkbox>
                </div>
              ))}
            </div>
          ))}
        </div>
      {/* </div> */}
    </>
  );
};

export default FillterComponent;
