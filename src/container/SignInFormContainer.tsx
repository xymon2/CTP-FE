import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { postUserInfoForLogin } from "../api/user";
import SignInForm from "../component/SignInForm";
import {
  LoginState,
  TokenState,
  UserInfoType,
  UserState,
} from "../recoil-state/userState";

const SignInFormContainer = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loggedIn, setLoggedIn] = useRecoilState<boolean>(LoginState);
  const setUserInfo = useSetRecoilState<UserInfoType>(UserState);
  const setToken = useSetRecoilState<string>(TokenState);

  const signIn = async () => {
    try {
      const token = (await postUserInfoForLogin(id, pw)).data;
      console.log(token);
      setToken(token);
      setLoggedIn(true);
    } catch (e: any) {
      alert("Invalid id or password");
    }
  };

  return (
    <div>
      <SignInForm setId={setId} setPw={setPw} signIn={signIn} />
    </div>
  );
};

export default SignInFormContainer;
