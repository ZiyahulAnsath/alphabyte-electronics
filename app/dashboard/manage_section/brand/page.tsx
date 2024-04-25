import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Brand from "@/components/ManageSection/Brand/page";
import BrandData from "@/components/ManageSection/Brand/BrandData/page";

export const metadata: Metadata = {
  title: "Brand | Alphabyte Electronics"
};

const BrandPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
       <Brand/>
       <BrandData/>
      </div>
    </DefaultLayout>
  );
};

export default BrandPage;
