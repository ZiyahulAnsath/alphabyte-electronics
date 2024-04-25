import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ShippingDetail from "@/components/ShippingDetail/page";

export const metadata: Metadata = {
  title: "Shipping Details | Alphabyte Electronics"
};


const ShippingDetailsPage = () => {
  return (
   <DefaultLayout>
    <ShippingDetail/>
   </DefaultLayout>
  )
}

export default ShippingDetailsPage