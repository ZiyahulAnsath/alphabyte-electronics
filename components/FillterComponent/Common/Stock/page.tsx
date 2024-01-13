import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const Stock = () => {
  const onChange = (e: CheckboxChangeEvent, label: string) => {
    console.log(`${label} checked = ${e.target.checked}`);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div>
          <Checkbox onChange={(e) => onChange(e, "In Stock")} className="text-gray-text font-semibold">
            In Stock
          </Checkbox>
        </div>
        <div>
          <Checkbox onChange={(e) => onChange(e, "Out Of Stock")} className="text-gray-text font-semibold">
            Out Of Stock
          </Checkbox>
        </div>
      </div>
    </>
  );
};

export default Stock;
