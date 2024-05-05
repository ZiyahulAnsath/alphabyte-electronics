"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLaptopModel,
  getAllLaptopModels,
  updateLaptopModel,
} from "@/slices/laptopModelSlice";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { RootState } from "@/app/store";
import { LaptopModel } from "@/types";

const ModelData: React.FC = () => {
  const dispatch = useDispatch();
  const laptopModels = useSelector(
    (state: RootState) => state.laptopModel.laptopModels,
  );

  useEffect(() => {
    dispatch(getAllLaptopModels());
  }, [dispatch]);

  const [editingModel, setEditingModel] = useState<LaptopModel | null>(null);

  const handleDeleteModel = (modelId: string) => {
    dispatch(deleteLaptopModel(modelId)).then(() => {
      dispatch(getAllLaptopModels());
    });
  };

  const handleEditModel = (model: LaptopModel) => {
    setEditingModel({ ...model });
  };

  const handleSaveModel = () => {
    if (!editingModel) return;

    dispatch(updateLaptopModel(editingModel)).then(() => {
      setEditingModel(null);
      dispatch(getAllLaptopModels());
    });
  };

  const handleCancelEdit = () => {
    setEditingModel(null);
  };

  return (
    <>
      <div className="rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  S.No
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Model Name
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {laptopModels.map((model: any, index: any) => (
                <tr key={model.id}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {index + 1}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    {editingModel && editingModel.id === model.id ? (
                      <input
                        type="text"
                        value={editingModel.name}
                        onChange={(e) =>
                          setEditingModel({
                            ...editingModel,
                            name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <h5 className="font-medium text-black dark:text-white">
                        {model.name}
                      </h5>
                    )}
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      {editingModel && editingModel.id === model.id ? (
                        <>
                          <button
                            onClick={handleSaveModel}
                            className="w-full translate-x-2 rounded-md bg-primary p-2 font-bold text-white ease-linear hover:bg-graydark"
                          >
                            Update
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="hover:text-red"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditModel(model)}
                            className="hover:text-primary"
                          >
                            <FaEdit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteModel(model._id)}
                            className="hover:text-red"
                          >
                            <RiDeleteBinFill className="h-5 w-5 hover:text-red-600" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ModelData;
