"use client";
// CategoryData.tsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  deleteCategory,
  updateCategory,
} from "@/slices/categorySlice";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { RootState } from "@/store/store";
import { Category } from "@/types";

const CategoryData: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.category.categories,
  );
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleDeleteCategory = (categoryId: string) => {
    dispatch(deleteCategory(categoryId)).then(() => {
      dispatch(getAllCategories());
    });
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
  };

  const handleSaveCategory = (updatedCategory: Category) => {
    dispatch(updateCategory(updatedCategory)).then(() => {
      setEditingCategory(null);
      dispatch(getAllCategories());
    });
  };

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
                Category Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Image Url
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {index + 1}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {editingCategory && editingCategory.id === category.id ? (
                      <input
                        type="text"
                        value={editingCategory.name}
                        onChange={(e) =>
                          setEditingCategory({
                            ...editingCategory,
                            name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      category.name
                    )}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {editingCategory && editingCategory.id === category.id ? (
                      <input
                        type="text"
                        value={editingCategory.imageUrl}
                        onChange={(e) =>
                          setEditingCategory({
                            ...editingCategory,
                            imageUrl: e.target.value,
                          })
                        }
                      />
                    ) : (
                      category.imageUrl
                    )}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    {editingCategory && editingCategory.id === category.id ? (
                      <button
                        onClick={() => handleSaveCategory(editingCategory)}
                        className="w-full translate-x-2 rounded-md bg-primary p-2 font-bold text-white ease-linear hover:bg-graydark"
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditCategory(category)}
                        className="hover:text-primary"
                      >
                        <FaEdit className="h-5 w-5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteCategory(category._id)}
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

export default CategoryData;
