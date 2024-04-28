import UserDashboard from "@/components/Dashboard/UserDashboard/page";
import UserAccountLayout from "@/components/Layouts/UserAccountLayout/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard | Alphabyte Electronics",
};
const MyAccount = () => {
  return (
   <>
   <UserAccountLayout>
    <UserDashboard/>
   </UserAccountLayout>
   
   
   </>
  )
}

export default MyAccount