import { API } from ".";

export const getAllBrandsApi = async () => {
  return await API.get("/brands");
};

export const createBrandApi = async (brandData) => {
  return await API.post("/brands", brandData);
};

export const updateBrandApi = async (brandData) => {
  const { _id, ...rest } = brandData;
  return await API.put(`/brands/${_id}`, rest);
};

export const deleteBrandApi = async (brandId) => {
  return await API.delete(`/brands/${brandId}`);
};
