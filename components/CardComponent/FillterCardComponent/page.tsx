"use client";
import Image from "next/image";
import Link from "next/link";
import { laptopDatas } from "@/data/laptopsData";
import { FaCartPlus } from "react-icons/fa";

const FillterCardComponent = ({ isInStock }: any) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-3 lg:gap-5">
      {laptopDatas.map((data, index) => (
        <Link href={`/product/${data.id}`} key={index}>
          <div className="glossy_brand flex flex-col mb-3 hover:font-semibold hover:shadow-xl hover:shadow-green-text/60">
            <div className="relative">
              <Image
                src={data.images[0]}
                alt="card"
                width={400}
                height={300}
                className="px-8"
                style={{
                  borderRadius: "25px 25px 0px 0px",
                }}
              />
              <div className="border-b-4 border-gray-bg_primary"></div>
              <div className="absolute top-0 px-5 py-5">
                <div
                  className={`rounded-full px-5 py-2 text-xs bg-gray-bg_primary ${
                    isInStock ? "text-green-text" : " text-red-500"
                  }`}
                >
                  {isInStock ? "In Stock" : "Out of Stock"}
                </div>
              </div>
            </div>
            <div className="px-3 py-5 ">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-10/12">
                  <h3 className="hover:text-green-text  hover:underline ease-in-out duration-700">
                    {data.name}
                  </h3>
                </div>
                <div className="w-3/12 flex items-center justify-center">
                  <div className="card_icon rounded-full border p-3  hover:text-green-text">
                    <FaCartPlus className="h-5 w-5 " />
                  </div>
                </div>
              </div>
              <h3 className="text-green-text text-base font-extralight">
                Laptop
              </h3>
              <h3 className="text-2xl">{data.misc[0].price} LKR</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FillterCardComponent;
