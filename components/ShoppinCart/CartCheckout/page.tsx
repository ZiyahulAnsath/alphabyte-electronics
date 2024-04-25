import { Divider } from "antd";
import Link from "next/link";

const CartCheckout = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <div>
            <h4 className="text-grey-text font-medium md:text-sm">Sub Total: </h4>
          </div>
          <div>
            <h4 className="text-grey-text font-semibold md:text-sm">
              500000 <span>LKR</span>
            </h4>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h4 className="text-grey-text font-medium md:text-sm">Shipping: </h4>
          </div>
          <div>
            <h4 className="text-grey-text font-medium md:text-sm">
              300 <span>LKR</span>
            </h4>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h4 className="text-grey-text font-medium md:text-sm">Tax: </h4>
          </div>
          <div>
            <h4 className="text-grey-text font-semibold md:text-sm">
              2000 <span>LKR</span>
            </h4>
          </div>
        </div>
        <Divider className="bg-white my-1" />
        <div className="flex justify-between">
          <div>
            <h4 className="text-grey-text font-medium md:text-sm">Total: </h4>
          </div>
          <div>
            <h4 className=" font-semibold md:text-sm text-gray-2">
              502300 <span>LKR</span>
            </h4>
          </div>
        </div>

        <Link
          href={"/"}
          className=" text-lg md:text-base lg:text-lg text-grey-bg_primary text-center bg-green-text font-bold hover:text-green-text hover:font-semibold ease-linear duration-300 border-none hover:bg-grey-bg_primary px-5 py-1.5 rounded-md"
        >
          Proceed To Checkout
        </Link>
      </div>
    </>
  );
};

export default CartCheckout;
