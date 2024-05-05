import React, { useState } from "react";

const LaptopFeatures = ({ onFeaturesData }: any) => {
  const [featuresData, setFeaturesData] = useState({
    fingerprint: "",
    iris: "",
    keyboard: "",
  });

  
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onFeaturesData({ ...featuresData, [name]: value }); // Notify parent about data change
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Fingerprint Reader
          </label>
          <input
            type="text"
            placeholder="Fingerprint Reader"
            value={featuresData.fingerprint}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="fingerprint"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Iris Scan
          </label>
          <input
            type="text"
            placeholder="Iris Scan"
            value={featuresData.iris}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="iris"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Keyboard
          </label>
          <input
            type="text"
            placeholder="Keyboard"
            value={featuresData.keyboard}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="keyboard"
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

export default LaptopFeatures;
