'use client'
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import UserDashboardSidebar from "@/components/Sidebar/UserDashboardSidebar/page";
import { usePathname } from "next/navigation";
import React from "react";

const UserAccountLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex min-h-screen overflow-hidden bg-grey-bg_primary">
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="flex-1 min-h-screen px-20 py-25">
            <div className="md:flex">
              {/* <!-- ===== Sidebar Start ===== --> */}
              <div className="hidden md:block md:w-2/5 lg:w-1/5 border-r-2">
                <UserDashboardSidebar pathname={pathname}/>
              </div>
              {/* <!-- ===== Sidebar End ===== --> */}
              <div className="w-full md:w-3/5 lg:w-4/5 md:pl-4 lg:px-6 md:px-0 px-4">{children}</div>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}

          {/* <!-- ===== Footer Start ===== --> */}
          <Footer />
          {/* <!-- ===== Footer End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
};

export default UserAccountLayout;

