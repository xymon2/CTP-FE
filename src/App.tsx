import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./page/SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={SignInPage()} />
      </Routes>
    </div>
  );
}

export default App;
