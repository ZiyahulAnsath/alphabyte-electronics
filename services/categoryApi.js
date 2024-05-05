import { API } from ".";

export const getAllCategoriesApi = async () => {
  return await API.get("/categories");
};

export const createCategoryApi = async (categoryData) => {
  return await API.post("/categories", categoryData);
};

export const updateCategoryApi = async (categoryData) => {
  const { _id, ...rest } = categoryData;
  return await API.put(`/categories/${_id}`, rest);
};

export const deleteCategoryApi = async (categoryId) => {
  return await API.delete(`/categories/${categoryId}`);
};
