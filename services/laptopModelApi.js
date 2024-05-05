import { API } from ".";

export const getAllLaptopModelsApi = async () => {
  return await API.get("/models");
};

export const createLaptopModelApi = async (laptopModelData) => {
  return await API.post("/models", laptopModelData);
};

export const updateLaptopModelApi = async (laptopModelData) => {
  const { _id, ...rest } = laptopModelData;
  return await API.put(`/models/${_id}`, rest);
};

export const deleteLaptopModelApi = async (laptopModelId) => {
  return await API.delete(`/models/${laptopModelId}`);
};
