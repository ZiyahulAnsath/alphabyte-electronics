'use client'

import { useEffect, useState } from "react";
import CartTable from "./CartTable/page";
import CartCheckout from "./CartCheckout/page";
import ShippingDetail from "../ShippingDetail/page";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0); // State to store subtotal

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:5050/api/v1/cart/${userId}`)
      .then((res) => res.json())
      .then((result) => {
        setCart(result);
      });
  }, []);

  const handleSubtotalChange = (newSubtotal: number) => {
    setSubtotal(newSubtotal);
  };

  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap w-full lg:px-10 px-5 lg:gap-5 gap-3  items-center">
        <div className="border md:rounded-3xl rounded-xl p-4 md:p-10 lg:w-3/4 w-full">
          <CartTable cart={cart} onSubtotalChange={handleSubtotalChange} />
        </div>
        <div className="glossy_hero border md:rounded-3xl rounded-xl p-4 md:p-4 lg:w-1/4 w-full">
          <CartCheckout subtotal={subtotal} />
        </div>
      </div>
    </>
  );
};


export default ShoppingCart;