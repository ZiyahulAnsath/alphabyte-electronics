import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UserAccount from "@/components/UserAccount/page";

export const metadata: Metadata = {
  title: "Add New Customer | Alphabyte Electronics"
};


const AddNewUserPage = () => {
  return (
    <DefaultLayout>
      <UserAccount/>
    </DefaultLayout>
  )
}

export default AddNewUserPage