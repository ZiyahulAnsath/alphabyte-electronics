import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import OrderHistory from "@/components/OrderHistory/page";

export const metadata: Metadata = {
  title: "Order History | Alphabyte Electronics"
};

const OrderHistoryPage = () => {
  return (
    <DefaultLayout>
        <OrderHistory/>
    </DefaultLayout>
  )
}

export default OrderHistoryPage