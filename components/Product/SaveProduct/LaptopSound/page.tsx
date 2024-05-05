import React, { useState } from "react";

const LaptopSound = ({ onSoundChange }: any) => {
  const [soundData, setsoundData] = useState({
    audio: "",
    chip: "",
    speakers: "",
    microphone: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setsoundData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onSoundChange({ ...soundData, [name]: value }); // Notify parent about data change
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Audio
          </label>
          <input
            type="text"
            placeholder="Audio"
            value={soundData.audio}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="audio"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Chip
          </label>
          <input
            type="text"
            placeholder="Chip"
            value={soundData.chip}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="chip"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Speakers
          </label>
          <input
            type="text"
            placeholder="Speakers"
            value={soundData.speakers}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="speakers"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Microphone
          </label>
          <input
            type="text"
            placeholder="Microphone"
            value={soundData.microphone}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="microphone"
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

export default LaptopSound;
