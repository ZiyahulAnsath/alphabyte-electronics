import React, { useState } from "react";

const LaptopBattery = () => {
  const [batteryType, setBatteryType] = useState("");
  const [adaptorType, setAdaptorType] = useState("");
  const [lifeHour, setLifeHour] = useState("");

  const clearAllInputs = () => {
    setBatteryType("");
    setAdaptorType("");
    setLifeHour("");
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
            value={batteryType}
            onChange={(e) => setBatteryType(e.target.value)}
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
            value={adaptorType}
            onChange={(e) => setAdaptorType(e.target.value)}
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
            value={lifeHour}
            onChange={(e) => setLifeHour(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="lifeHour"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="hover:bg-graydark rounded-lg bg-primary px-4 py-2 dark:hover:bg-meta-7 text-white transition duration-300 focus:outline-none"
          onClick={clearAllInputs}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default LaptopBattery;
