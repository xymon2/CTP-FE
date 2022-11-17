import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./page/SignInPage";
import ProblemListPage from "./page/ProblemListPage";
import TestPage from "./page/TestPage";
import { loginCheck } from "./api/user";

function App() {
  useEffect(() => {
    (async () => {
      try {
        const user = await loginCheck();
        console.log(user);
        sessionStorage.setItem("hasAccess", "true");
      } catch (e) {
        sessionStorage.setItem("hasAccess", "false");
      }
    })();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        {sessionStorage.getItem("hasAccess") === "true" ? (
          <>
            <Route path="/problems/:problemId" element={<TestPage />} />
            <Route path="/problems" element={<ProblemListPage />} />
            <Route path="*" element={<Navigate to="/problems" replace />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/signin" replace />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
