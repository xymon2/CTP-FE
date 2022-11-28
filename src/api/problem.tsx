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

export const postRunCode = (
  id: string,
  language: string,
  code: string,
  input: string
) => {
  return axiosClient.post(
    `/api/v0/problems/${id}/run`,
    { language: language, code: code, input: input },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const postSubmitCode = (id: string, language: string, code: string) => {
  return axiosClient.post(
    `/api/v0/problems/${id}/run`,
    { language: language, code: code },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
