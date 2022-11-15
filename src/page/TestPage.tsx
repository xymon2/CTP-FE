import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProblem } from "../api/problem";
import ProblemDescription from "../component/ProblemDescription";
import logo from "../static/logo.png";
import "./TestPage.css";

const TestPage = () => {
  let { problemId } = useParams();
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (problemId) {
        const { data } = await getOneProblem(problemId);
        console.log(data);
        setDescription(data.description);
      }
      // setProblemList(data);
    })();
  }, [problemId]);

  return (
    <div className="test-page">
      <div className="testpage-header">
        <img className="header-logo-img" src={logo} alt="logo" />
        <div className="header-text"> Litcode</div>
      </div>
      <div className="test-description">
        <ProblemDescription mdString={description} />
      </div>
    </div>
  );
};

export default TestPage;
