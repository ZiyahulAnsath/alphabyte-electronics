import Categories from "@/components/Categories/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import React from "react";

const DefaultMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="flex-1">
            <div className="md:flex">
              {/* <!-- ===== Sidebar Start ===== --> */}
              <div className="hidden md:block md:w-1/4 lg:w-1/6 ">
                <Categories />
              </div>
              {/* <!-- ===== Sidebar End ===== --> */}
              <div className="w-full md:w-3/4 lg:w-5/6 md:pl-4 lg:px-6 md:px-0 px-4">{children}</div>
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

export default DefaultMainLayout;

