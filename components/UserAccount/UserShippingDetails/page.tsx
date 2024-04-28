"use client";

const UserShippingDetails = () => {
  const handleSave = () => {
    // Handle saving data logic here
    console.log("Data saved!");
  };

  return (
    <>
      <div className="px-5">
        <div>
          <h2 className="mb-6 text-center text-3xl font-semibold text-green-text">
            Shipping Details
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            <div>
              <label className="block pb-2 text-sm font-medium text-grey-text">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-grey-text dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="block pb-2 text-sm font-medium text-grey-text">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-grey-text dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="block pb-2 text-sm font-medium text-grey-text">
                Province/State
              </label>
              <input
                type="text"
                placeholder="Province/State"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-grey-text dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="block pb-2 text-sm font-medium text-grey-text">
                Town/City
              </label>
              <input
                type="text"
                placeholder="Town/City"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-grey-text dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="block pb-2 text-sm font-medium text-grey-text">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-grey-text dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              className=" rounded-md border-none bg-green-text px-5 py-1.5 text-xl font-bold text-grey-bg_primary transition duration-300 ease-linear hover:bg-grey-bg_primary hover:font-semibold hover:text-green-text hover:outline-none hover:ring-2 hover:ring-green-text"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserShippingDetails;
