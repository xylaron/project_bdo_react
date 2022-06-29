import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TicTacToe from "./TicTacToe";
import GrindCalc from "./GrindCalc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-zinc-800 h-screen w-screen">
      <div className="p-10">
        <TicTacToe />
        <GrindCalc />
      </div>
    </div>
  </React.StrictMode>
);
