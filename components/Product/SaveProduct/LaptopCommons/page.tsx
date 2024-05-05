import React, { useState } from "react";

const LaptopCommons = ({ onCommonsData }: any) => {
  const [commonsData, setCommonsData] = useState({
    wlan: "",
    bluetooth: "",
    type_c: "",
    usb: "",
    cardReader: "",
    hdmi: "",
    ethernet: "",
    headphoneJack: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCommonsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onCommonsData({ ...commonsData, [name]: value }); // Notify parent about data change
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            WLAN
          </label>
          <input
            type="text"
            placeholder="WLAN"
            value={commonsData.wlan}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="wlan"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Bluetooth
          </label>
          <input
            type="text"
            placeholder="Bluetooth"
            value={commonsData.bluetooth}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="bluetooth"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Type C
          </label>
          <input
            type="text"
            placeholder="Type C"
            value={commonsData.type_c}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="type_c"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            USB
          </label>
          <input
            type="text"
            placeholder="USB"
            value={commonsData.usb}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="usb"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Card Reader
          </label>
          <input
            type="text"
            placeholder="Card Reader"
            value={commonsData.cardReader}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="cardReader"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            HDMI
          </label>
          <input
            type="text"
            placeholder="HDMI"
            value={commonsData.hdmi}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="hdmi"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Ethernet
          </label>
          <input
            type="text"
            placeholder="Ethernet"
            value={commonsData.ethernet}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="ethernet"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Headphone Jack
          </label>
          <input
            type="text"
            placeholder="Headphone Jack"
            value={commonsData.headphoneJack}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="headphoneJack"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="rounded-lg bg-primary px-4 py-2 text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-7"
          // onClick={clearAllInputs}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default LaptopCommons;
