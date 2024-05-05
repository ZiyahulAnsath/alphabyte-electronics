import React, { useState } from "react";

const LaptopBody = ({ onBodyDataChange }: any) => {
  const [bodyData, setBodyData] = useState({
    dimension: "",
    weight: "",
    build: "",
    sim: "",
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setBodyData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  // React.useEffect(() => {
  //   onBodyDataChange(bodyData);
  // }, [bodyData, onBodyDataChange]);

  const handleClearData = () => {
    setBodyData({
      dimension: "",
      weight: "",
      build: "",
      sim: "",
    });
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setBodyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onBodyDataChange({ ...bodyData, [name]: value }); // Notify parent about data change
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Dimension
          </label>
          <input
            name="dimension"
            onChange={handleInputChange}
            value={bodyData.dimension}
            type="text"
            placeholder="Dimension"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Weight
          </label>
          <input
            name="weight"
            onChange={handleInputChange}
            value={bodyData.weight}
            type="text"
            placeholder="Weight"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Build
          </label>
          <input
            name="build"
            onChange={handleInputChange}
            value={bodyData.build}
            type="text"
            placeholder="Build"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Sim
          </label>
          <input
            name="sim"
            onChange={handleInputChange}
            value={bodyData.sim}
            type="text"
            placeholder="Sim"
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

export default LaptopBody;
