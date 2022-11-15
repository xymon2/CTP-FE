import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./page/SignInPage";
import ProblemListPage from "./page/ProblemListPage";
import TestPage from "./page/TestPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/problems/:problemId" element={<TestPage />} />
        <Route path="/problems/" element={<ProblemListPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
