import AdminDashboard from "@/components/Dashboard/page";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Alphabyte Electronics",
};
const DashboardPage = () => {
  return (
    <DefaultLayout>
        <AdminDashboard/>
    </DefaultLayout>
  )
}

export default DashboardPage