"use client";
import { useState } from "react";
import Price from "./Price/page";
import Link from "next/link";

const DataComponent = ({ laptop}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div>
        {/* <h1 className="text-3xl text-green-text md:-mt-20 mt-0">{laptop?.name}</h1> */}
        <h1 className="text-3xl text-green-text">{laptop?.name}</h1>
        <ul className="list-disc pl-4">
          <li className="text-sm text-gray-text">
            {laptop?.platform[0].chipset} {laptop?.platform[0].cpu} -{" "}
            {laptop?.generation}TH Generation
          </li>
          <li className="text-sm text-gray-text">
            {laptop?.memory[0]?.ram[0]?.capacity} Soldered{" "}
            {laptop?.memory[0]?.ram[0]?.ddr} -{" "}
            {laptop?.memory[0]?.ram[0]?.speed}
          </li>
          <li className="text-sm text-gray-text">
            {laptop?.memory[0]?.hdd[0]?.capacity} -{" "}
            {laptop?.memory[0]?.hdd[0]?.type}
          </li>
          <li className="text-sm text-gray-text">
            {laptop?.display[0]?.size} - {laptop?.display[0]?.hz}, Refresh Rate
            Display
          </li>
          <li className="text-sm text-gray-text">
            {laptop?.platform[0].gpu[0]?.type}-{" "}
            {laptop?.platform[0].gpu[0]?.capacity} Graphics
          </li>
          <li className="text-sm text-gray-text">
            {laptop?.battery[0].type}- {laptop?.battery[0].adaptorType}
            Battery Type
          </li>
          <li className="text-sm text-gray-text">{laptop?.platform[0].os}</li>
          <li className="text-sm text-gray-text">
            Fingerprint Reader: {laptop?.features[0].fingerprintReader}
          </li>
          <li className="text-sm text-gray-text">
            Iris Scan: {laptop?.features[0].irisscan}
          </li>
          <li className="text-sm text-gray-text">
            Keyboard: {laptop?.features[0].keyboard}
          </li>
        </ul>
      </div>

      <Price laptop={laptop} quantity={quantity} setQuantity={setQuantity} />
      <div className="flex flex-wrap gap-7">
        <div>
          <Link
            href={"/"}
            className=" text-xl bg-green-text font-bold text-gray-bg_primary hover:text-green-text hover:font-semibold ease-linear duration-300 border-none hover:bg-gray-bg_primary px-5 py-1.5 rounded-md"
          >
            Buy Now
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
            className=" text-xl font-semibold hover:text-gray-bg_primary hover:border-gray-bg_primary hover:font-bold ease-linear duration-300 border-4 text-green-text border-green-text px-5 py-1.5 rounded-md"
          >
            Add to Card
          </Link>
        </div>
      </div>
    </>
  );
};

export default DataComponent;
