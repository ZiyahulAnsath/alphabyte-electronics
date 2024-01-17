"use client";

import Categories from "@/components/Categories/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
// import ProductPage from "@/components/ProductPage/page";
import { bannerContent } from "@/data/bannerContent";
import { Carousel, Image } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useState, useRef } from "react";
import ProductDetails from "./[productId]/page";
import ImageComponent from "@/components/ProductPage/ImageComponent/page";

const Product = ({
  params,
}: {
  params: {
    productId: String;
  };
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  const handleSlideChange = (index: number) => {
    console.log(`Carousel slide changed: ${index}`);
    setCurrentSlide(index);
  };

  const handleSilhouetteClick = (index: number) => {
    console.log(`Silhouette clicked: ${index}`);
    setCurrentSlide(index);
    carouselRef.current?.goTo(index, false);
  };

  return (
    <>
      <Header />
      {/* End Main Header */}

      <div className="flex flex-row gap-3">
        <div className="basis-1/6">
          <Categories />
        </div>

        {/* <div className="w-full">
          <FillterHeading />
          <div className="flex flex-row gap-3 py-5">
            <div className="basis-1/6">
              <FillterComponent />
            </div>
            <div className="w-full px-4">
              <FillterCardComponent isInStock={isInStock}/>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
      {/* End Footer */}
    </>
  );
};

export default Product;
