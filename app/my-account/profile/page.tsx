import UserAccountLayout from "@/components/Layouts/UserAccountLayout/page";
import UserProfile from "@/components/UserAccount/UserProfile/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile | Alphabyte Electronics",
};

const UserProfilePage = () => {
  return (
    <UserAccountLayout>
      <UserProfile />
    </UserAccountLayout>
  );
};

export default UserProfilePage;
