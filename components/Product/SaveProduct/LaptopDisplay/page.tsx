import React, { useState } from "react";

const LaptopDisplay = ({ onDisplayDataChange }) => {
  const [displayData, setDisplayData] = useState({
    displayType: " ",
    size: " ",
    webcam: " ",
    touchpad: " ",
    hz: "",
  });

  // const clearAllInputs = () => {
  //   setType("");
  //   setSize("");
  //   setWebcam("");
  //   setTouchpad("");
  //   setHz("");
  // };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setDisplayData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onDisplayDataChange({ ...displayData, [name]: value });
  };

  const handleClearData = () => {
    setDisplayData({
      displayType: " ",
      size: " ",
      webcam: " ",
      touchpad: " ",
      hz: "",
    });
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
            onChange={handleInputChange}
            value={displayData.displayType}
            name="displayType"
            placeholder="Type"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Size
          </label>
          <input
            type="text"
            onChange={handleInputChange}
            value={displayData.size}
            name="size"
            placeholder="Size"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Webcam
          </label>
          <input
            type="text"
            onChange={handleInputChange}
            value={displayData.webcam}
            name="webcam"
            placeholder="Webcam"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Touchpad
          </label>
          <input
            type="text"
            onChange={handleInputChange}
            value={displayData.touchpad}
            name="touchpad"
            placeholder="Touchpad"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Hz
          </label>
          <input
            type="text"
            placeholder="Hz"
            onChange={handleInputChange}
            value={displayData.hz}
            name="hz"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="rounded-lg bg-primary px-4 py-2 text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-7"
          onClick={handleClearData}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default LaptopDisplay;
