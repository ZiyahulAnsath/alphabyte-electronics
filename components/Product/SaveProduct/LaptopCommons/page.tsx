import React, { useState } from "react";

const LaptopCommons = () => {
  const [wlan, setWlan] = useState("");
  const [bluetooth, setBluetooth] = useState("");
  const [typeC, setTypeC] = useState("");
  const [usb, setUsb] = useState("");
  const [cardReader, setCardReader] = useState("");
  const [hdmi, setHdmi] = useState("");
  const [ethernet, setEthernet] = useState("");
  const [headphoneJack, setHeadphoneJack] = useState("");

  const clearAllInputs = () => {
    setWlan("");
    setBluetooth("");
    setTypeC("");
    setUsb("");
    setCardReader("");
    setHdmi("");
    setEthernet("");
    setHeadphoneJack("");
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            WLAN
          </label>
          <input
            type="text"
            placeholder="WLAN"
            value={wlan}
            onChange={(e) => setWlan(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="wlan"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Bluetooth
          </label>
          <input
            type="text"
            placeholder="Bluetooth"
            value={bluetooth}
            onChange={(e) => setBluetooth(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="bluetooth"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Type C
          </label>
          <input
            type="text"
            placeholder="Type C"
            value={typeC}
            onChange={(e) => setTypeC(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="typeC"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            USB
          </label>
          <input
            type="text"
            placeholder="USB"
            value={usb}
            onChange={(e) => setUsb(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="usb"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Card Reader
          </label>
          <input
            type="text"
            placeholder="Card Reader"
            value={cardReader}
            onChange={(e) => setCardReader(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="cardReader"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            HDMI
          </label>
          <input
            type="text"
            placeholder="HDMI"
            value={hdmi}
            onChange={(e) => setHdmi(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="hdmi"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Ethernet
          </label>
          <input
            type="text"
            placeholder="Ethernet"
            value={ethernet}
            onChange={(e) => setEthernet(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="ethernet"
          />
        </div>
        <div>
          <label className="block pb-2 text-sm font-medium text-black dark:text-white">
            Headphone Jack
          </label>
          <input
            type="text"
            placeholder="Headphone Jack"
            value={headphoneJack}
            onChange={(e) => setHeadphoneJack(e.target.value)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name="headphoneJack"
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

export default LaptopCommons;
