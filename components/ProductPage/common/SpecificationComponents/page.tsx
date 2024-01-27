// import React, { useState } from 'react';
// import { Switch, Table } from 'antd';
// import type { TableColumnsType } from 'antd';
// import { laptopDatas } from '@/data/laptopsData';

// interface LaptopData {
//   id: number;
//   brand: string;
//   name: string;
//   generation: string;
//   images: string[];
//   body: { dimension: string; weight: string; build: string; sim: string }[];
//   display: { type: string; size: string; webcam: string; touchpad: string; hz: string }[];
//   platform: { os: string; chipset: string; cpu: string; gpu: { type: string; capacity: string }[] }[];
//   memory: {
//     hdd: { type: string; capacity: string }[];
//     ram: { capacity: string; ddr: string; speed: string; factor: string }[];
//     storageSupport: string;
//   }[];
//   sound: {
//     audio: string;
//     chip: string;
//     speakers: string;
//     microphone: string;
//   }[];
//   commons: {
//     wlan: string;
//     bluetooth: string;
//     type_C: string;
//     usb: string;
//     cardReader: string;
//     hdmi: string;
//     ethernet: string;
//     headphoneJack: string;
//   }[];
//   features: {
//     fingerprintReader: string;
//     irisScan: string;
//     keyboard: string;
//   }[];
//   battery: { type: string; adaptorType: string; lifeHour: string }[];
//   misc: { color: string; models: string; warranty: string; price: string }[];
// }

// // ... (Previous imports and interfaces)

// const columns: TableColumnsType<LaptopData> = [
//     {
//       title: 'Brand',
//       dataIndex: 'brand',
//       key: 'brand',
//       fixed: 'left',
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       fixed: 'left',
//     },
//     {
//       title: 'Generation',
//       dataIndex: 'generation',
//       key: 'generation',
//       width: 150,
//     },
//     {
//       title: 'Body Dimension',
//       dataIndex: 'body',
//       key: 'dimension',
//     //   fixed: 'left',
//       render: (body: { dimension: string; weight: string; build: string; sim: string }[]) => body[0]?.dimension,
//     },
//     {
//       title: 'Body Weight',
//       dataIndex: 'body',
//       key: 'weight',
//     //   fixed: 'left',
//       render: (body: { dimension: string; weight: string; build: string; sim: string }[]) => body[0]?.weight,
//     },
//     {
//       title: 'Body Build',
//       dataIndex: 'body',
//       key: 'build',
//     //   fixed: 'left',
//       render: (body: { dimension: string; weight: string; build: string; sim: string }[]) => body[0]?.build,
//     },
//     {
//       title: 'Body Sim',
//       dataIndex: 'body',
//       key: 'sim',
//     //   fixed: 'left',
//       render: (body: { dimension: string; weight: string; build: string; sim: string }[]) => body[0]?.sim,
//     },
//     {
//       title: 'Display Type',
//       dataIndex: 'display',
//       key: 'type',
//       render: (display: { type: string; size: string; webcam: string; touchpad: string; hz: string }[]) => display[0]?.type,
//     },
//     // Add more columns based on your data structure
//   ];

//   const SpecificationComponents = () => {
//     const data: LaptopData[] = laptopDatas.map((laptop) => ({
//         key: laptop.id,
//         brand: laptop.brand,
//         name: laptop.name,
//         generation: laptop.generation,
//         body: laptop.body,
//         display: laptop.display,
//         // Add other properties based on your data structure
//       }));

//       return (
//         <Table
//           columns={columns}
//           dataSource={data}
//           scroll={{ x: 1500 }}
//           sticky={{ offsetHeader: 64 }}
//         />
//       );
//     };

//     export default SpecificationComponents;

const SpecificationComponents = () => {
  return (
    <>
      <table className="w-full border-collapse">
        <thead></thead>
        <tbody>
          
          <tr className="">
            <th rowSpan={4} className="text-green-text border border-green-text tracking-wider w-fit ">
              Body
            </th>
            <td className="border-b-2 border-green-300 pl-5 w-fit border" >Dimension</td>
            <td className="pl-5 border border-separate">hi1</td>
          </tr>
          <tr className="">
            <td className="border-b-2 border-green-300 pl-5 w-fit border" >Weight</td>
            <td className="pl-5 border border-separate">hi2</td>
          </tr>
          <tr className="">
            <td className="border-b-2 border-green-300 pl-5 w-fit border" >Build</td>
            <td className="pl-5 border border-separate">hi3</td>
          </tr>
          <tr className="">
            <td className="border-b-2 border-green-300 pl-5 w-fit border" >Sim</td>
            <td className="pl-5 border border-separate">hi4</td>
          </tr>
        

          

        </tbody>
      </table>
    </>
  );
};

export default SpecificationComponents;
