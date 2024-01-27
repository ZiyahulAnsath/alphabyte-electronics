"use client";

import Categories from "@/components/Categories/page";
import Header from "@/components/Header/page";
import ResponsiveTabs from "@/components/ProductPage/common/ResponsiveTabs/page";
import SpecificationComponents from "@/components/ProductPage/common/SpecificationComponents/page";
import DataComponent from "@/components/ProductPage/DataComponent/page";
import ImageComponent from "@/components/ProductPage/ImageComponent/page";
import ReviewComponents from "@/components/ProductPage/ReviewComponents/page";
import { laptopDatas } from "@/data/laptopsData";
import { useState } from "react";

//Specification component
const Specification = () => {
  return <><SpecificationComponents/></>
};

// Review component
const Review = ({laptop}:any) => {
  return <><ReviewComponents laptop={laptop}/></>;
};

// Compare component
const Compare = () => {
  return <div>This is the Compare section</div>;
};

const components = {
  specification: Specification,
  review: Review,
  compare: Compare,
};


const ProductDetails = ({
  params,
}: {
  params: {
    productId: String;
  };
}) => {
  const laptop = laptopDatas.find(
    (laptop) => laptop.id === parseInt(params.productId as string, 10)
  );

  // console.log(laptop?.platform[0].gpu);

  if (!laptop) {
    return <div>Loading...</div>;
  }

  const [activeTab, setActiveTab] = useState("specification");

  return (
    <>
      <Header />
      {/* End Main Header */}

      <div className="flex gap-2 md:gap-5 pr-5">
        <div className=" w-full md:w-1/6 ">
          <Categories />
        </div>
        <div className=" w-full md:w-5/6  glossy_hero border rounded-3xl mb-10">
          <div className="flex flex-wrap px-5 md:pt-16 md:px-16 md:pb-5">
            <div className="lg:w-2/4 w-full">
              {" "}
              <ImageComponent laptop={laptop} />
            </div>
            <div className="lg:w-2/4 w-full">
              <DataComponent laptop={laptop} />
            </div>
          </div>
          <div className="flex justify-between px-0 md:p-0 mt-5">
            <ResponsiveTabs activeTab={activeTab} setActiveTab={setActiveTab} components={components}/>
          </div>
          <div className="py-5">
            {components[activeTab]({ laptop })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
