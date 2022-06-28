import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TicTacToe from "./TicTacToe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-zinc-800 h-screen w-screen">
      <div className="">
        <TicTacToe />
      </div>
    </div>
  </React.StrictMode>
);
