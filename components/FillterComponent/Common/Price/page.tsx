"use client";
import { Slider } from "antd";
import { useState } from "react";

const Price = () => {
  const [sliderValues, setSliderValues] = useState([1000, 200000]);

  const handleSliderChange = (values: [number, number]) => {
    setSliderValues(values);
  };

  return (
    <>
      <div className="flex justify-between">
        <span className=" text-sm text-green-text">{`Min: ${sliderValues[0]}`}</span>
        <span className=" text-sm text-gray-text">-</span>

        <span className=" text-sm text-green-text">{`Max: ${sliderValues[1]}`}</span>
      </div>
      <Slider
        range
        min={1000}
        max={200000}
        step={1000}
        defaultValue={[1000, 200000]}
        onChange={handleSliderChange}
        className="w-100"
        styles={{
          rail: { backgroundColor: "lightgray" },
          track: { backgroundColor: "green" },
        }}
      />
    </>
  );
};

export default Price;
