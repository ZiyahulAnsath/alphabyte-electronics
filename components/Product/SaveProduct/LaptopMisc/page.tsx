import React, { useState } from "react";

const LaptopMisc = ({ onMiscData }: any) => {
  const [miscData, setMiscData] = useState({
    color: "",
    warranty: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setMiscData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onMiscData({ ...miscData, [name]: value }); // Notify parent about data change
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Color
          </label>
          <input
            type="text"
            placeholder="Color"
            value={miscData.color}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="color"
          />
        </div>
        {/* <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Models
          </label>
          <input
            type="text"
            placeholder="Models"
            value={miscData.warranty}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="models"
          />
        </div> */}
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Warranty
          </label>
          <input
            type="text"
            placeholder="Warranty"
            value={miscData.warranty}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="warranty"
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

export default LaptopMisc;
