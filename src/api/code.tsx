import axios from "axios";

const client = axios.create();

export const postCodeForRunAPI = (
  type: string,
  code: string,
  input: string
) => {
  return client.post(`/api/v0/codes/ran`, {
    type: type,
    code: code,
    input: input,
  });
};

export const postCodeForSubmitAPI = (type: string, code: string) => {
  return client.post(`/api/v0/codes/submitted`, {
    type: type,
    code: code,
  });
};
