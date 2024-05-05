import React, { useState } from "react";

const LaptopMemory = ({onMemoryDataChange}:any) => {
 
  // const [hddType, setHddType] = useState("");
  // const [hddCapacity, setHddCapacity] = useState("");
  // const [ramCapacity, setRamCapacity] = useState("");
  // const [ramDDR, setRamDDR] = useState("");
  // const [ramSpeed, setRamSpeed] = useState("");
  // const [ramFactor, setRamFactor] = useState("");
  // const [ramStorageSupport, setRamStorageSupport] = useState("");

  // const clearAllInputs = () => {
    
  //   setHddType("");
  //   setHddCapacity("");
  //   setRamCapacity("");
  //   setRamDDR("");
  //   setRamSpeed("");
  //   setRamFactor("");
  //   setRamStorageSupport("");
  // };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    onMemoryDataChange({ [name]: value });
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
       
        <div className="col-span-4">
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            HDD
          </label>
        </div>
        <div>
          <label className="block pb-1 text-sm font-medium text-black dark:text-white">
            Type
          </label>
          <input
            type="text"
            placeholder="HDD Type"
            // value={hddType}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="hddType"
          />
        </div>
        <div>
          <label className="block pb-1 text-sm font-medium text-black dark:text-white">
            Capacity
          </label>
          <input
            type="text"
            placeholder="HDD Capacity"
            // value={hddCapacity}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="hddCapacity"
          />
        </div>
        <div className="col-span-4">
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            RAM
          </label>
        </div>
        <div>
          <label className="block pb-1 text-sm font-medium text-black dark:text-white">
            Capacity
          </label>
          <input
            type="text"
            placeholder="RAM Capacity"
            // value={ramCapacity}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="ramCapacity"
          />
        </div>
        <div>
          <label className="block pb-1 text-sm font-medium text-black dark:text-white">
            DDR
          </label>
          <input
            type="text"
            placeholder="RAM DDR"
            // value={ramDDR}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="ramDDR"
          />
        </div>
        <div>
          <label className="block pb-1 text-sm font-medium text-black dark:text-white">
            Speed
          </label>
          <input
            type="text"
            placeholder="RAM Speed"
            // value={ramSpeed}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="ramSpeed"
          />
        </div>
        <div>
          <label className="block pb-1 text-sm font-medium text-black dark:text-white">
            Factor
          </label>
          <input
            type="text"
            placeholder="RAM Factor"
            // value={ramFactor}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="ramFactor"
          />
        </div>
        <div>
          <label className="block pb-1 text-sm font-medium text-black dark:text-white">
            Storage Support
          </label>
          <input
            type="text"
            placeholder="RAM Storage Support"
            // value={ramStorageSupport}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="ramStorageSupport"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="hover:bg-graydark rounded-lg bg-primary px-4 py-2 dark:hover:bg-meta-7 text-white transition duration-300 focus:outline-none"
          // onClick={clearAllInputs}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default LaptopMemory;
