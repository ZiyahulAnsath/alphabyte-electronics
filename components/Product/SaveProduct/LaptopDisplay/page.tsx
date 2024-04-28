import React, { useState } from "react";

const LaptopDisplay = () => {
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [webcam, setWebcam] = useState("");
  const [touchpad, setTouchpad] = useState("");
  const [hz, setHz] = useState("");

  const clearAllInputs = () => {
    setType("");
    setSize("");
    setWebcam("");
    setTouchpad("");
    setHz("");
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Type
          </label>
          <input
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="type"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Size
          </label>
          <input
            type="text"
            placeholder="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="size"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Webcam
          </label>
          <input
            type="text"
            placeholder="Webcam"
            value={webcam}
            onChange={(e) => setWebcam(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="webcam"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Touchpad
          </label>
          <input
            type="text"
            placeholder="Touchpad"
            value={touchpad}
            onChange={(e) => setTouchpad(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="touchpad"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Hz
          </label>
          <input
            type="text"
            placeholder="Hz"
            value={hz}
            onChange={(e) => setHz(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="hz"
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

export default LaptopDisplay;
