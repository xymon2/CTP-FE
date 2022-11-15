import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="signin-page">
      <img src="/litcode-logo.png" className="signin-logo" alt="logo" />
      <form className="loginForm">
        <h1>Coding Test</h1>
        <input
          className="loginInput"
          autoComplete="id"
          name="id"
          placeholder="아이디"
        />
        <input
          className="loginInput"
          autoComplete="password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        <button className="loginBtn">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
