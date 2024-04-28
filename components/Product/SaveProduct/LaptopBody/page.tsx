import React, { useState } from "react";

const LaptopBody = () => {
  const [dimension, setDimension] = useState("");
  const [weight, setWeight] = useState("");
  const [build, setBuild] = useState("");
  const [sim, setSim] = useState("");

  const clearAllInputs = () => {
    setDimension("");
    setWeight("");
    setBuild("");
    setSim("");
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Dimension
          </label>
          <input
            type="text"
            placeholder="Dimension"
            value={dimension}
            onChange={(e) => setDimension(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="dimension"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Weight
          </label>
          <input
            type="text"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="weight"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Build
          </label>
          <input
            type="text"
            placeholder="Build"
            value={build}
            onChange={(e) => setBuild(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="build"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Sim
          </label>
          <input
            type="text"
            placeholder="Sim"
            value={sim}
            onChange={(e) => setSim(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="sim"
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

export default LaptopBody;
