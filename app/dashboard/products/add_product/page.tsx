import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddNewProduct from "@/components/Product/SaveProduct/page";


export const metadata: Metadata = {
  title: "Add Products | Alphabyte Electronics",
};
const AddProductsPage = () => {
  return (
    <DefaultLayout>
      <AddNewProduct/>
    </DefaultLayout>
  )
}

export default AddProductsPage