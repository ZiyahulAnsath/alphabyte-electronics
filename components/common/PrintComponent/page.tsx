// PrintComponent.tsx
import React from "react";
import { AiFillPrinter } from "react-icons/ai";
import logo from "./logo.png"; // Import your logo image

interface PrintComponentProps {
  handlePrint: () => void;
}

const PrintComponent: React.FC<PrintComponentProps> = ({ handlePrint }) => {
  return (
    <div className="print-header">
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <button className="print-button" onClick={handlePrint}>
        <AiFillPrinter /> Print
      </button>
      {/* Other details */}
      asajas
      <h2>dsjddhsd</h2>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        perferendis nisi aut eaque hic nulla provident, aliquid, dignissimos
        impedit laboriosam soluta officiis non quasi corporis repudiandae
        maiores laudantium error inventore?
      </h6>
    </div>
  );
};

export default PrintComponent;
