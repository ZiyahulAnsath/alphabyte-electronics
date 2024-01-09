import BrandPage from "@/components/BannerPage/BrandPage/page";
import BannerPage from "@/components/BannerPage/page";
import CardComponent from "@/components/CardComponent/page";
import Categories from "@/components/Categories/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
};

const Home_1 = () => {
  const isInStock = false;
  return (
    <>
      <Header />
      {/* End Main Header */}

      <div className="flex flex-wrap">
        <div className=" hidden lg:block w-full lg:w-1/6">
          <Categories />
        </div>
        <div className="w-full lg:w-5/6 lg:pl-8 lg:px-8 px-5 ">
          <BannerPage />
          {/* End Hero */}

          <BrandPage />
          {/* End brand */}

          <CardComponent isInStock={isInStock} />
          {/* End Card */}
        </div>
      </div>

      <Footer />
      {/* End Footer */}
    </>
  );
};

export default Home_1;
