import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ManageProduct from "@/components/Product/ManageProduct/page";


export const metadata: Metadata = {
  title: "Manage Laptop | Alphabyte Electronics",
};

const ManageProductsPage = () => {
  return (
    <DefaultLayout>
      <ManageProduct/>
    </DefaultLayout>
  )
}

export default ManageProductsPage