import UserAccountLayout from "@/components/Layouts/UserAccountLayout/page";
import UserShippingDetails from "@/components/UserAccount/UserShippingDetails/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Shipping Details | Alphabyte Electronics",
};


const UserShippingPage = () => {
  return (
    <UserAccountLayout>
        <UserShippingDetails/>
    </UserAccountLayout>
  )
}

export default UserShippingPage