import React, { Dispatch, FC, SetStateAction } from "react";

interface SignInProps {
  setId: Dispatch<SetStateAction<string>>;
  setPw: Dispatch<SetStateAction<string>>;
  signIn: () => Promise<void>;
}

const SignInForm: FC<SignInProps> = ({ setId, setPw, signIn }) => {
  const changeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const changePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const submitInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn();
  };

  return (
    <form className="signin-form" onSubmit={submitInfo}>
      <input
        className="signin-input"
        autoComplete="id"
        name="id"
        placeholder="ID"
        onChange={changeId}
      />
      <input
        className="signin-input"
        autoComplete="password"
        name="password"
        placeholder="PASSWORD"
        type="password"
        onChange={changePw}
      />
      <button className="signin-btn">Sign In</button>
    </form>
  );
};

export default SignInForm;
