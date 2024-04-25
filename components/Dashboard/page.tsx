"use client";
import React from "react";

import { HiOutlineEye } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi2";
import CardDataStats from "@/components/CardDataStats";
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import ChartThree from "@/components/Charts/ChartThree";
import MapOne from "@/components/Maps/MapOne";
import TableOne from "@/components/Tables/TableOne";
import ChatCard from "@/components/Chat/ChatCard";

const AdminDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          <HiOutlineEye className="w-6 h-6  text-primary dark:text-white" />
        </CardDataStats>
        <CardDataStats title="Total Profit" total="$45,2K" rate="4.35%" levelUp>
          <BsCart2 className="w-6 h-6 text-primary dark:text-white" />
        </CardDataStats>
        <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
          <CgShoppingBag className="w-6 h-6 text-primary dark:text-white" />
        </CardDataStats>
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>
          <HiOutlineUsers className="w-6 h-6 text-primary dark:text-white" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default AdminDashboard;
