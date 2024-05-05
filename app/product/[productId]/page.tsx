"use client";
import DefaultMainLayout from "@/components/Layouts/DefaultMainLayout/page";
import ProductNotFound from "@/components/NotFound/ProductNotFound/page";
import DataComponent from "@/components/ProductPage/DataComponent/page";
import ImageComponent from "@/components/ProductPage/ImageComponent/page";
import ReviewComponents from "@/components/ProductPage/ReviewComponents/page";
import ResponsiveTabs from "@/components/ProductPage/common/ResponsiveTabs/page";
import SpecificationComponents from "@/components/ProductPage/common/SpecificationComponents/page";
import { getSingleProduct } from "@/slices/productSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Define types for components
type ComponentType = {
  specification: () => JSX.Element;
  review: (props: { product: any }) => JSX.Element;
  compare: () => JSX.Element;
};

// Specification component
const Specification = () => {
  return <SpecificationComponents/>;
};

// Review component
const Review = ({ product }: { product: any }) => {
  return <ReviewComponents product={product} />;
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
  
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.singleProduct);
  const [activeTab, setActiveTab] = useState<keyof ComponentType>("specification");

  console.log(product);
  

  useEffect(() => {
    dispatch(getSingleProduct(params.productId));
  }, [dispatch, params.productId]);

  if (!product) {
    return (
      <DefaultMainLayout>
        <ProductNotFound/>
      </DefaultMainLayout>
    );
  }


  return (
    <DefaultMainLayout>
      <div className="w-full glossy_hero border rounded-3xl mb-10">
        <div className="flex flex-wrap px-5 md:pt-16 md:px-16 md:pb-5">
          <div className="lg:w-2/4 w-full">
            <ImageComponent product={product} />
          </div>
          <div className="lg:w-2/4 w-full">
            <DataComponent product={product} />
          </div>
        </div>
        <div className="flex justify-between px-0 md:p-0 mt-5">
          <ResponsiveTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            components={components}
          />
        </div>
        <div className="py-5">{components[activeTab]({ product })}</div>
      </div>
    </DefaultMainLayout>
  );
};

export default ProductDetails;
