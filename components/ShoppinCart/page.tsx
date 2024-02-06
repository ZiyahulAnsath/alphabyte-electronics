import CartCheckout from "./CartCheckout/page";
import CartTable from "./CartTable/page";

const ShoppingCart = () => {
  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap w-full lg:px-10 px-5 lg:gap-5 gap-3  items-center">
        <div className="border md:rounded-3xl rounded-xl p-4 md:p-10 lg:w-3/4 w-full">
          <CartTable />
        </div>
        <div className="glossy_hero border md:rounded-3xl rounded-xl p-4 md:p-4 lg:w-1/4 w-full">
          <CartCheckout />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
