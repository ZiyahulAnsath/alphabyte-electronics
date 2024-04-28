"use client";

import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
  key: React.Key;
  userName: string;
  productName: string;
  total: number;
  phone: string;
  status: string; // Dynamically changeable status
}

const columns: TableColumnsType<DataType> = [
  {
    title: "User Name",
    dataIndex: "userName",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Product Name",
    dataIndex: "productName",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: string) => {
      let statusColor = "";
      if (status === "Pending") {
        statusColor = "orange";
      } else if (status === "Confirmed") {
        statusColor = "green";
      } else if (status === "Cancel") {
        statusColor = "red";
      }
      return <span style={{ color: statusColor }}>{status}</span>;
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    userName: "John Brown",
    productName: "Laptop",
    total: 1500,
    phone: "123456789",
    status: "Pending",
  },
  {
    key: "2",
    userName: "Jim Green",
    productName: "Phone",
    total: 800,
    phone: "987654321",
    status: "Confirmed",
  },
  {
    key: "3",
    userName: "Joe Black",
    productName: "Tablet",
    total: 400,
    phone: "456789123",
    status: "Cancel",
  },
];

const rowSelection = {
  onChange: (
    selectedRowKeys: React.Key[],
    selectedRows: DataType[]
  ) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const UserOrders:React.FC =()=>{
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox",);

return (
  <>
    <div>
      <h2 className="mb-6 text-center text-3xl font-semibold text-green-text">
        Account Details
      </h2>
      <div className="text-grey-text">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  </>
);
};

export default UserOrders;
