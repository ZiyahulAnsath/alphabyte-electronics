import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Category from "@/components/ManageSection/Category/page";
import CategoryData from "@/components/ManageSection/Category/CategoryData/page";

export const metadata: Metadata = {
  title: "Category | Alphabyte Electronics"
};

const CategoryPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <Category />
        <CategoryData />
      </div>
    </DefaultLayout>
  );
};

export default CategoryPage;
