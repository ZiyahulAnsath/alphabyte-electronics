import React, { useState } from "react";

const LaptopBattery = ({ onBatteryData }: any) => {
  const [batteryData, setBatteryData] = useState({
    batteryType: "",
    adaptorType: "",
    hour: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setBatteryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onBatteryData({ ...batteryData, [name]: value }); // Notify parent about data change
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Battery Type
          </label>
          <input
            type="text"
            placeholder="Battery Type"
            value={batteryData.batteryType}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="batteryType"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Adaptor Type
          </label>
          <input
            type="text"
            placeholder="Adaptor Type"
            value={batteryData.adaptorType}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="adaptorType"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Life Hour
          </label>
          <input
            type="text"
            placeholder="Life Hour"
            value={batteryData.hour}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="hour"
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

export default LaptopBattery;
