import React, { useState } from "react";

const LaptopMemory = () => {
  const [os, setOs] = useState("");
  const [chipset, setChipset] = useState("");
  const [cpu, setCpu] = useState("");
  const [gpuType, setGpuType] = useState("");
  const [gpuCapacity, setGpuCapacity] = useState("");
  const [hddType, setHddType] = useState("");
  const [hddCapacity, setHddCapacity] = useState("");
  const [ramCapacity, setRamCapacity] = useState("");
  const [ramDDR, setRamDDR] = useState("");
  const [ramSpeed, setRamSpeed] = useState("");
  const [ramFactor, setRamFactor] = useState("");
  const [ramStorageSupport, setRamStorageSupport] = useState("");

  const clearAllInputs = () => {
    setOs("");
    setChipset("");
    setCpu("");
    setGpuType("");
    setGpuCapacity("");
    setHddType("");
    setHddCapacity("");
    setRamCapacity("");
    setRamDDR("");
    setRamSpeed("");
    setRamFactor("");
    setRamStorageSupport("");
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            OS
          </label>
          <input
            type="text"
            placeholder="OS"
            value={os}
            onChange={(e) => setOs(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="os"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Chipset
          </label>
          <input
            type="text"
            placeholder="Chipset"
            value={chipset}
            onChange={(e) => setChipset(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="chipset"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            CPU
          </label>
          <input
            type="text"
            placeholder="CPU"
            value={cpu}
            onChange={(e) => setCpu(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="cpu"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            GPU Type
          </label>
          <input
            type="text"
            placeholder="GPU Type"
            value={gpuType}
            onChange={(e) => setGpuType(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="gpuType"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            GPU Capacity
          </label>
          <input
            type="text"
            placeholder="GPU Capacity"
            value={gpuCapacity}
            onChange={(e) => setGpuCapacity(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="gpuCapacity"
          />
        </div>
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
            value={hddType}
            onChange={(e) => setHddType(e.target.value)}
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
            value={hddCapacity}
            onChange={(e) => setHddCapacity(e.target.value)}
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
            value={ramCapacity}
            onChange={(e) => setRamCapacity(e.target.value)}
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
            value={ramDDR}
            onChange={(e) => setRamDDR(e.target.value)}
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
            value={ramSpeed}
            onChange={(e) => setRamSpeed(e.target.value)}
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
            value={ramFactor}
            onChange={(e) => setRamFactor(e.target.value)}
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
            value={ramStorageSupport}
            onChange={(e) => setRamStorageSupport(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="ramStorageSupport"
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

export default LaptopMemory;
