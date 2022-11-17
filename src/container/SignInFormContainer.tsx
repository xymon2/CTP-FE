import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUserInfoForLogin } from "../api/user";
import SignInForm from "../component/SignInForm";

const SignInFormContainer = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("hasAccess") === "true") {
      navigate("/problems");
    }
  });

  const signIn = async () => {
    try {
      const token = (await postUserInfoForLogin(id, pw)).data;
      sessionStorage.setItem("accessToken", token);
      sessionStorage.setItem("hasAccess", "true");
      navigate("/problems");
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
