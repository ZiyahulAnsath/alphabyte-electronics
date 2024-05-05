import React from "react";
import { useReactToPrint } from "react-to-print";
import { AiFillPrinter } from "react-icons/ai";

const PrintComponent = ({ tableRef }) => {
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  return (
    <button
      onClick={handlePrint}
      className="flex items-center gap-2 rounded-md bg-meta-3 px-4 py-2 text-lg text-white transition duration-300 hover:bg-graydark focus:outline-none dark:hover:bg-meta-10"
    >
      <AiFillPrinter className="h-5 w-5" />
      Print Data
    </button>
  );
};

export default PrintComponent;
