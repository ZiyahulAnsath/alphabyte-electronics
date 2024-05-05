"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/slices/productSlice";

const FillterCardComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state:any) => state.product.products);

  console.log(products);
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-5">
      {products.map((data, index) => (
        <Link href={`/product/${data._id}`} key={index}>
          <div className="glossy_brand mb-3 flex flex-col hover:font-semibold hover:shadow-xl hover:shadow-green-text/60" style={{ height: "420px" }}>
            <div className="relative" style={{ height: "70%" }}>
              <div className="relative" style={{ height: "100%" }}>
                <Image
                  src={`${data.images[0]}`} // Ensure that the path starts with a leading slash if it's relative
                  alt={`${data.name}-${+1}`}
                  layout="fill"
                  objectFit="cover"
                  style={{
                    borderRadius: "25px 25px 0px 0px",
                  }}
                />
              </div>

              <div className="border-b-4 border-grey-bg_primary"></div>
              <div className="absolute top-0 px-5 py-5">
                <div
                  className={`rounded-full bg-grey-bg_primary px-5 py-2 text-xs ${
                    data.isInStock ? "text-red-500" : " text-green-text"
                  }`}
                >
                  {data.isInStock ? "Out of Stock" : "In Stock"}
                </div>
              </div>
            </div>
            <div className="px-3 py-5 ">
              <div className="flex flex-row items-center gap-3">
                <div className="w-10/12">
                  <h3 className="text-grey-text duration-700 ease-in-out hover:text-green-text hover:underline">
                    {data.name}
                  </h3>
                </div>
                <div className="flex w-3/12 items-center justify-center">
                  <div className="card_icon rounded-full border p-3 text-grey-text hover:text-green-text">
                    <FaCartPlus className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <h3 className="text-grey-textfont-extralight text-base text-green-text">
                {data.category}
              </h3>
              <h3 className="text-2xl text-grey-text">{data.price} LKR</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FillterCardComponent;
