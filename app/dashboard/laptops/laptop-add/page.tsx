import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddNewLaptop from "@/components/Laptop/SaveLaptop/page";

export const metadata: Metadata = {
  title: "Add Laptop | Alphabyte Electronics",
};

const AddNewLaptopPage = () => {
  return (
    <DefaultLayout>
        <AddNewLaptop/>
    </DefaultLayout>
  )
}

export default AddNewLaptopPage