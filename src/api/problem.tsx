import { axiosClient } from ".";

const token = window.sessionStorage.getItem("accessToken");

export const getProblemList = () => {
  return axiosClient.get(`/api/v0/problems`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getOneProblem = (id: string) => {
  return axiosClient.get(`/api/v0/problems/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
