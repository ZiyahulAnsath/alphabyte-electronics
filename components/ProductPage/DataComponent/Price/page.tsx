const Price = ({ product, quantity, setQuantity }:any) => {
  //   const handleQuantityChange = (e) => {
  //     const newQuantity = parseInt(e.target.value, 10);
  //     setQuantity(newQuantity);
  //   };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity((prevQuantity: number) => prevQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity: number) => prevQuantity - 1);
    }
  };

  // console.log(product?.misc[0]?.price);

  const getTotalPrice = () => {
    // Assuming product.price is the price of a single item
    // return product?.misc[0]?.price * quantity;
  };
  return (
    <>
      <div className="flex gap-5 items-center mb-3 flex-nowrap text-grey-text">
        <div>Quantity:</div>
        <button
          onClick={handleDecrease}
          className="px-2 py-1 border border-grey-text rounded-md hover:bg-grey-bg_primary hover:text-green-text"
        >
          -
        </button>
        <span className=" font-extrabold">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="px-2 py-1 border border-grey-text rounded-md hover:bg-grey-bg_primary hover:text-green-text"
        >
          +
        </button>
      </div>
      <h6 className="text-xs text-grey-text">Minimum Quantity 1 Maximum Quantity 10</h6>

      <p className="text-3xl text-green-text font-bold">
        {/* <span>{product?.misc[0]?.price} LKR</span> */}
      </p>
      {/* <h2>Total Price: ${getTotalPrice()}</h2> */}
    </>
  );
};

export default Price;
