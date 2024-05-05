"use client";
import { useState } from "react";
import Price from "./Price/page";
import Link from "next/link";
import { useRouter } from "next/router";

const DataComponent = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  // const router = useRouter();

  const addToCart = () => {
    const isLoggedIn = localStorage.getItem("token") || localStorage.getItem("cookie");

    if (!isLoggedIn) {
      window.location.href = '/auth/signin';
    } else {
      window.location.href=('/cart');
    }
  };

  return (
    <>
      <div>
        <h1 className="text-3xl text-green-text">{product?.name}</h1>
        <ul className="list-disc pl-4">
          <li className="text-sm text-grey-text">
            {product?.platform.chipset} {product?.platform.cpu} -{" "}
            {product?.generation}TH Generation
          </li>
          <li className="text-sm text-grey-text">
            {product?.memory?.ram?.capacity} Soldered{" "}
            {product?.memory?.ram?.ddr} -{" "}
            {product?.memory?.ram?.speed}
          </li>
          <li className="text-sm text-grey-text">
            {product?.memory?.hdd?.capacity} -{" "}
            {product?.memory?.hdd?.hddType}
          </li>
          <li className="text-sm text-grey-text">
            {product?.display?.size} - {product?.display?.hz}, Refresh Rate
            Display
          </li>
          <li className="text-sm text-grey-text">
            {product?.platform?.gpu}-{" "}
            {product?.platform?.capacity} Graphics
          </li>
          <li className="text-sm text-grey-text">
            {product?.battery.batteryType}- {product?.battery.adaptorType}
            Battery Type
          </li>
          <li className="text-sm text-grey-text">{product?.platform.os}</li>
          <li className="text-sm text-grey-text">
            Fingerprint Reader: {product?.features?.fingerprint}
          </li>
          <li className="text-sm text-grey-text">
            Iris Scan: {product?.features?.iris}
          </li>
          <li className="text-sm text-grey-text">
            Keyboard: {product?.features.keyboard}
          </li>
        </ul>
      </div>

      <Price product={product} quantity={quantity} setQuantity={setQuantity} />
      <div className="flex flex-wrap gap-7">
        <div>
          <button
            // onClick={"/"}
            className=" text-xl bg-green-text font-bold text-grey-bg_primary hover:text-green-text hover:font-semibold ease-linear duration-300 border-none hover:bg-grey-bg_primary px-5 py-1.5 rounded-md"
          >
            Buy Now
          </button>
        </div>
        <div>
          <button
            onClick={addToCart}
            className="text-xl font-semibold hover:text-grey-bg_primary hover:border-grey-bg_primary hover:font-bold ease-linear duration-300 border-4 text-green-text border-green-text px-5 py-1.5 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default DataComponent;
