import { axiosClient } from ".";

export const postUserInfoForLogin = (id: string, password: string) => {
  console.log(id, password);
  return axiosClient.post(`/api/v0/auth`, {
    id: id,
    password: password,
  });
};
