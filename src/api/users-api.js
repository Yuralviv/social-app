import { instance } from "./api";

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((res) => res.data);
};

export const getUsersPage = (pageNumber, pageSize) => {
  return instance
    .get(`users?page=${pageNumber}&count=${pageSize}`)
    .then((res) => res.data);
};

export const followApi = (id) => {
  return instance
  .post(`follow/${id}`).then((res) => res.data);
};

export const unfollowApi = (id) => {
  return instance
  .delete(`follow/${id}`).then((res) => res.data);
};