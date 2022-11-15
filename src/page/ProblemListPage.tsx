import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProblemList } from "../api/problem";
import ProblemCard from "../component/ProblemCard";
import { ProblemSummaryType } from "../recoil-state/problemState";
import logo from "../static/logo.png";

import "./ProblemListPage.css";

const ProblemListPage = () => {
  const [problemList, setProblemList] = useState<ProblemSummaryType[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getProblemList();
      setProblemList(data);
    })();
  });

  return (
    <div className="problemlist-page">
      <div className="problem-page-banner">
        <img src={logo} className="problemlist-logo" alt="logo" />
        <div className="problem-page-banner-text">
          <div>
            This is Litcode coding test.
            <br /> Choose a problem.
          </div>
        </div>
      </div>
      <div className="problem-list">
        <div className="problem-list-header">
          <div className="prob-no">No</div>
          <div className="prob-name">name</div>
          <div className="prob-solved"></div>
        </div>
        {problemList.map((problem) => {
          return (
            <Link
              key={problem.id}
              to={`/problems/${problem.id}`}
              draggable={false}
            >
              <div className="problem-item">
                <ProblemCard probNo={problem.id} name={problem.name} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProblemListPage;
