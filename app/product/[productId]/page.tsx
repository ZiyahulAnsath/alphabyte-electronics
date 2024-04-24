"use client";
import DefaultMainLayout from "@/components/Layouts/DefaultMainLayout/page";
import ResponsiveTabs from "@/components/ProductPage/common/ResponsiveTabs/page";
import SpecificationComponents from "@/components/ProductPage/common/SpecificationComponents/page";
import DataComponent from "@/components/ProductPage/DataComponent/page";
import ImageComponent from "@/components/ProductPage/ImageComponent/page";
import ReviewComponents from "@/components/ProductPage/ReviewComponents/page";
import { laptopDatas } from "@/data/laptopsData";
import { useState } from "react";

// Define types for components
type ComponentType = {
  specification: () => JSX.Element;
  review: (props: { laptop: any }) => JSX.Element;
  compare: () => JSX.Element;
};

// Specification component
const Specification = () => {
  return <SpecificationComponents />;
};

// Review component
const Review = ({ laptop }: { laptop: any }) => {
  return <ReviewComponents laptop={laptop} />;
};

// Compare component
const Compare = () => {
  return <div>This is the Compare section</div>;
};

const components: ComponentType = {
  specification: Specification,
  review: Review,
  compare: Compare,
};

const ProductDetails = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  const laptop = laptopDatas.find(
    (laptop) => laptop.id === parseInt(params.productId, 10)
  );

  if (!laptop) {
    return <div>Loading...</div>;
  }

  const [activeTab, setActiveTab] =
    useState<keyof ComponentType>("specification");

  return (
    <>
      <DefaultMainLayout>
        <div className=" w-full glossy_hero border rounded-3xl mb-10">
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
            <ResponsiveTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              components={components}
            />
          </div>
          <div className="py-5">{components[activeTab]({ laptop })}</div>
        </div>
      </DefaultMainLayout>
    </>
  );
};

export default ProductDetails;
