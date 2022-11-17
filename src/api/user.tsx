import { axiosClient } from ".";

const token = window.sessionStorage.getItem("accessToken");

export const postUserInfoForLogin = (id: string, password: string) => {
  return axiosClient.post(`/api/v0/auth`, {
    id: id,
    password: password,
  });
};

export const loginCheck = () => {
  console.log(token);
  return axiosClient.get(`/api/v0/users/check`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
