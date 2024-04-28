import React, { useState } from 'react';

const LaptopPlatform = () => {
  const [os, setOs] = useState('');
  const [chipset, setChipset] = useState('');
  const [cpu, setCpu] = useState('');
  const [gpuType, setGpuType] = useState('');
  const [gpuCapacity, setGpuCapacity] = useState('');

  const clearAllInputs = () => {
    setOs('');
    setChipset('');
    setCpu('');
    setGpuType('');
    setGpuCapacity('');
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

export default LaptopPlatform;
