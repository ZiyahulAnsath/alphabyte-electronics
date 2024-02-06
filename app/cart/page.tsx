import ShoppingCart from "@/components/ShoppinCart/page";

const Cart = () => {
  return (
    <>
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-white lg:px-10 px-5 py-5">
          Shopping Cart
        </h1>

        <ShoppingCart />
      </div>
    </>
  );
};

export default Cart;
