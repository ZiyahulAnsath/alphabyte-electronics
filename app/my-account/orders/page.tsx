import UserAccountLayout from "@/components/Layouts/UserAccountLayout/page";
import { Metadata } from "next";
import UserOrders from "@/components/UserAccount/UserOrders/page";

export const metadata: Metadata = {
  title: "User Orders | Alphabyte Electronics",
};


const UserOrdersPage = () => {
  return (
    <UserAccountLayout>
        <UserOrders/>
    </UserAccountLayout>
  )
}

export default UserOrdersPage