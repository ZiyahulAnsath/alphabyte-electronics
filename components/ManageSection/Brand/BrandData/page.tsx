"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand, getAllBrands, updateBrand } from "@/slices/brandSlice";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

const BrandData: React.FC = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state: any) => state.brand.brands);

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  const handleDeleteBrand = (brandId: string) => {
    dispatch(deleteBrand(brandId)).then(() => {
      dispatch(getAllBrands());
    });
  };

  const handleEditBrand = (brand: Brand) => {
    setEditingBrandId(brand.id);
    setEditingBrand({ ...brand }); // Store a copy of the original brand object
  };

  const handleSaveBrand = () => {
    dispatch(updateBrand(editingBrand)).then(() => {
      setEditingBrandId(null); // Reset editing state
      dispatch(getAllBrands());
    });
  };

  // State variable to keep track of the currently editing brand ID and brand object
  const [editingBrandId, setEditingBrandId] = useState<string | null>(null);
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null);

  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                S.No
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Brand Name
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand: any, index: any) => (
              <tr key={brand.id}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {index + 1}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {editingBrandId === brand.id ? (
                      <input
                        type="text"
                        value={editingBrand?.name || ""}
                        onChange={(e) =>
                          setEditingBrand({
                            ...editingBrand!,
                            name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      brand.name
                    )}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    {editingBrandId === brand.id ? (
                      <button
                        onClick={handleSaveBrand}
                        className="w-full translate-x-2 rounded-md bg-primary p-2 font-bold text-white ease-linear hover:bg-graydark"
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditBrand(brand)}
                        className="hover:text-primary"
                      >
                        <FaEdit className="h-5 w-5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteBrand(brand._id)}
                      className="hover:text-red"
                    >
                      <RiDeleteBinFill className="h-5 w-5 hover:text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandData;
