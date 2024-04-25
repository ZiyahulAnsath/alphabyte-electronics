import React, { useState } from "react";

const LaptopSound = () => {
  const [audio, setAudio] = useState("");
  const [chip, setChip] = useState("");
  const [speakers, setSpeakers] = useState("");
  const [microphone, setMicrophone] = useState("");

  const clearAllInputs = () => {
    setAudio("");
    setChip("");
    setSpeakers("");
    setMicrophone("");
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
            value={audio}
            onChange={(e) => setAudio(e.target.value)}
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
            value={chip}
            onChange={(e) => setChip(e.target.value)}
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
            value={speakers}
            onChange={(e) => setSpeakers(e.target.value)}
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
            value={microphone}
            onChange={(e) => setMicrophone(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="microphone"
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

export default LaptopSound;
