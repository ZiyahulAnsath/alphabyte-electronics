import { API } from ".";

export const getAllProductsApi = async () => {
    return await API.get('/products');
}
export const getSingleProductApi = async (productId) => {
  return await API.get(`/products/${productId}`);
};


export const createProductApi = async (productData) => {
  return await API.post("/products", productData);
};

export const updateProductApi = async (productData) => {
  const { _id, ...rest } = productData;
  return await API.put(`/products/${_id}`, rest);
};

export const deleteProductApi = async (productId) => {
  return await API.delete(`/products/${productId}`);
};
