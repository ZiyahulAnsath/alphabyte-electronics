import FillterCardComponent from "@/components/CardComponent/FillterCardComponent/page";
import Categories from "@/components/Categories/page";
import FillterHeading from "@/components/FillterComponent/Common/FillterHeading/page";
import FillterComponent from "@/components/FillterComponent/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import Link from "next/link";
import React from "react";

const Category = () => {
  const isInStock = true;
  return (
    <>
      <Header />
      {/* End Main Header */}

      <div className="flex flex-row gap-3">
        <div className="basis-1/6">
          <Categories />
        </div>

        <div className="w-full">
          <FillterHeading />
          <div className="flex flex-row gap-3 py-5">
            <div className="basis-1/6">
              <FillterComponent />
            </div>
            <div className="w-full px-4">
              <FillterCardComponent isInStock={isInStock}/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* End Footer */}
    </>
  );
};

export default Category;
