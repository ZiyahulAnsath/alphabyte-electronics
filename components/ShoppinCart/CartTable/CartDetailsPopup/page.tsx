import React from "react";
import lgo1 from "@/public/images/brand/apple.svg";
import Image from "next/image";

const CartDetailsPopup = ({ selectedProduct, setSelectedProduct }: any) => {
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full md:h-3/4 h-full flex items-center justify-center z-50 bg-black bg-opacity-70 px-3 md:px-0 ">
          <div className="bg-white p-8 rounded-lg">
            <button
              className="absolute md:top-10 md:right-20 top-2 right-2 text-grey-bg_primary hover:text-green-text card_icon p-2 rounded-md"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex items-center space-x-4">
              <Image
                src={lgo1}
                alt="card"
                className="md:w-24 w-12 md:h-24 h-12 rounded-full"
              />
              <div>
                <h2 className="md:text-lg text-sm font-semibold">
                  Product Description
                </h2>
                <p className="text-grey-500 text-xs ">
                  {selectedProduct.productName}
                </p>
                <div className="flex gap-4">
                  <h4 className="text-xs text-grey-500 ">
                    Price:{" "}
                    <span className="text-grey-text">
                      LKR {selectedProduct.price}
                    </span>
                  </h4>
                  <h4 className="text-xs text-grey-500 ">
                    Quantity:{" "}
                    <span className="text-grey-text">
                      {selectedProduct.quantity}
                    </span>
                  </h4>
                  <h4 className="text-xs text-grey-500 ">
                    Sub Total:{" "}
                    <span className="text-grey-text">
                      LKR {selectedProduct.price * selectedProduct.quantity}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetailsPopup;
