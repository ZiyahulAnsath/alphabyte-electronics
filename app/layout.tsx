"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import "./globals.css";
import "antd/dist/reset.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

// List of allowed paths
const allowedPaths = ["/", "/auth/signin", "/auth/signup", "/about"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentPath = window.location.pathname;

    // Check if the token is missing and the current path is not in the allowed paths
    if (!token && !allowedPaths.includes(currentPath)) {
      redirect("/auth/signin");
    } else {
      setLoading(false);
    }

    // Check if the user is accessing the dashboard page
    if (currentPath === "/dashboard") {
      const role = localStorage.getItem("role");
      if (role !== "admin") {
        redirect("/");
      }
    }
  }, []);
  return (
    <Provider store={store}>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <div>{loading ? <Loader /> : children}</div>
          <ToastContainer />
        </body>
      </html>
    </Provider>
  );
}
