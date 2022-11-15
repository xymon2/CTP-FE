import React, { FC } from "react";

interface ProblemCardProps {
  probNo: number;
  name: string;
}

const ProblemCard: FC<ProblemCardProps> = ({ probNo, name }) => {
  return (
    <>
      <div className="prob-no">{probNo}</div>
      <div className="prob-name">{name}</div>
      <div className="prob-solved"></div>
    </>
  );
};

export default ProblemCard;
