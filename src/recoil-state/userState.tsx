import { atom } from "recoil";

export interface UserInfoType {
  userId: string;
  name: string;
  email: string;
  solvedId: string;
  password: string;
}

export const UserState = atom<UserInfoType>({
  key: "userInfo",
  default: { userId: "", name: "", email: "", password: "", solvedId: "" },
});

export const LoginState = atom<boolean>({
  key: "loginInfo",
  default: false,
});

export const TokenState = atom<string>({
  key: "tokenInfo",
  default: "",
});
