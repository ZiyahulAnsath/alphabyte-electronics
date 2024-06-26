import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddNewProduct from "@/components/Product/SaveProduct/page";


export const metadata: Metadata = {
  title: "Add Laptop | Alphabyte Electronics",
};

const AddNewLaptopPage = () => {
  return (
    <DefaultLayout>
        <AddNewProduct/>
    </DefaultLayout>
  )
}

export default AddNewLaptopPage