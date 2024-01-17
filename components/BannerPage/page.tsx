"use client";

import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import { bannerContent } from "@/data/bannerContent";
import { CarouselRef } from "antd/es/carousel";
import { useState, useRef } from "react";


const BannerPage = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const carouselRef = useRef<CarouselRef>(null);

  // const handleSlideChange = (index: number) => {
  //   console.log(`Carousel slide changed: ${index}`);
  //   setCurrentSlide(index);
  // };

  // const handleSilhouetteClick = (index: number) => {
  //   console.log(`Silhouette clicked: ${index}`);
  //   setCurrentSlide(index);
  //   carouselRef.current?.goTo(index, false);
  // };
  return (
    <>
      <div className="glossy_hero border rounded-3xl p-4 md:p-16">
        <Carousel autoplay pauseOnHover={true} pauseOnDotsHover={true}>
          {bannerContent.map((product) => (
            <div key={product.id}>
              <div className="flex flex-wrap items-center md:mb-12">
                <div className=" w-full lg:w-1/2 md:w-2/5 md:px-5 md:pb-0 pb-5">
                  <Carousel draggable pauseOnDotsHover={false}>
                    {product.images.map((image, index) => (
                      <div className="relative md:h-64 h-52" key={index}>
                        <Image
                          src={image}
                          alt={`Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          // width={400}
                          // height={100}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className=" w-full lg:w-1/2 md:w-3/5 md:px-5">
                  <h1 className=" text-xl md:text-3xl font-bold text-white">
                    {product.name}{" "}
                    <span className=" text-green-text">{product.gen}</span>{" "}
                    PROCESSOR{" "}
                  </h1>
                  <h6 className=" text-xs md:text-sm mb-7 text-gray-text font-raleway md:mr-0 mr-8">
                    {product.description}
                  </h6>
                  <div className="pb-4 text-center md:text-left">
                    <Link
                      href={"/"}
                      className=" text-xl bg-green-text font-bold hover:text-green-text hover:font-semibold ease-linear duration-300 border-none hover:bg-gray-bg_primary px-5 py-1.5 rounded-md"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* <BrandPage /> */}
      {/* <div className="flex"></div> */}
    </>
  );
};

export default BannerPage;
