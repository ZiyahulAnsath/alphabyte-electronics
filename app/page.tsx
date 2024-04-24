import DefaultMainLayout from "@/components/Layouts/DefaultMainLayout/page";
import { Metadata } from "next";
import BannerPage from "@/components/BannerPage/page";
import BrandPage from "@/components/BannerPage/BrandPage/page";
import CardComponent from "@/components/CardComponent/page";

export const metadata: Metadata = {
  title: "Home | Alphabyte Electronics",
};

export default function Home() {
  const isInStock = false;
  return (
    <>
      <DefaultMainLayout>
        <div className="flex flex-wrap">
          <div className="w-full ">
            <BannerPage />

            <BrandPage />

            <CardComponent isInStock={isInStock} />
          </div>
        </div>
      </DefaultMainLayout>
    </>
  );
}
