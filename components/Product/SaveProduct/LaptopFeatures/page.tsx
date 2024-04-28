import React, { useState } from "react";

const LaptopFeatures = () => {
  const [fingerprintReader, setFingerprintReader] = useState("");
  const [irisScan, setIrisScan] = useState("");
  const [keyboard, setKeyboard] = useState("");

  const clearAllInputs = () => {
    setFingerprintReader("");
    setIrisScan("");
    setKeyboard("");
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
            value={fingerprintReader}
            onChange={(e) => setFingerprintReader(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="fingerprintReader"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Iris Scan
          </label>
          <input
            type="text"
            placeholder="Iris Scan"
            value={irisScan}
            onChange={(e) => setIrisScan(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="irisScan"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Keyboard
          </label>
          <input
            type="text"
            placeholder="Keyboard"
            value={keyboard}
            onChange={(e) => setKeyboard(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="keyboard"
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

export default LaptopFeatures;
