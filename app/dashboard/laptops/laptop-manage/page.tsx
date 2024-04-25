import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ManageLaptop from "@/components/Laptop/ManageLaptop/page";

export const metadata: Metadata = {
  title: "Manage Laptop | Alphabyte Electronics",
};

const ManageLaptopPage = () => {
  return (
    <DefaultLayout>
      <ManageLaptop/>
    </DefaultLayout>
  )
}

export default ManageLaptopPage