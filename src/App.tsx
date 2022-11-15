import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./page/SignInPage";
import ProblemListPage from "./page/ProblemListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/problems" element={ProblemListPage()} />
        <Route path="/signin" element={SignInPage()} />
      </Routes>
    </div>
  );
}

export default App;
