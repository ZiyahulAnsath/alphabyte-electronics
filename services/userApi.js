import { API } from ".";

export const getAllUsersApi = async () => {
  return await API.get("/users");
};

export const createUserApi = async (userData) => {
  return await API.post("/users", userData);
};

export const updateUserApi = async (userData) => {
  const { _id, ...rest } = userData;
  return await API.put(`/users/${_id}`, rest);
};

export const deleteUserApi = async (userId) => {
  return await API.delete(`/users/${userId}`);
};
