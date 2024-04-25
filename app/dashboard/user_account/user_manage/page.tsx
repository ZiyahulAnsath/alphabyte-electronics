import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ManageAccount from "@/components/UserAccount/ManageAccount/page";

export const metadata: Metadata = {
  title: "Manage Customer | Alphabyte Electronics"
};

const UserManagePage = () => {
  return (
   <DefaultLayout>
    <ManageAccount/>
   </DefaultLayout>
  )
}

export default UserManagePage