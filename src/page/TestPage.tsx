import TestPageContainer from "../container/TestPageContainer";
import logo from "../static/logo.png";
import "./TestPage.css";

const TestPage = () => {
  return (
    <div className="test-page">
      <div className="testpage-header">
        <img
          className="header-logo-img"
          src={logo}
          alt="logo"
          draggable={false}
        />
        <div className="header-text"> Litcode</div>
      </div>
      <div className="test-page-body">
        <TestPageContainer />
      </div>
    </div>
  );
};

export default TestPage;
