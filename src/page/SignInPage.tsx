import SignInFormContainer from "../container/SignInFormContainer";
import "./SignInPage.css";

import logo from "../static/litcode-logo.png";

const SignInPage = () => {
  return (
    <div className="signin-page">
      <img src={logo} className="signin-logo" alt="logo" />
      <h1>Coding Test</h1>
      <SignInFormContainer />
    </div>
  );
};

export default SignInPage;
