"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import "./globals.css";
import "antd/dist/reset.css";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);



  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div>
        {loading ? <Loader /> : children}
        </div>
      </body>
    </html>
  );
}
