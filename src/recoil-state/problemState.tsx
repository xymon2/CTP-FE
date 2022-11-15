import { atom } from "recoil";

export interface ProblemSummaryType {
  id: number;
  name: string;
}

export const ProblemListState = atom<ProblemSummaryType[]>({
  key: "problemList",
  default: [],
});
