import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Functions/HomePage";
import TicTacToe from "../Functions/TicTacToe";
import GrindCalc from "../Functions/GrindCalc";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/grindcalc" element={<GrindCalc />} />
    <Route path="/tictactoe" element={<TicTacToe />} />
  </Routes>
);

export default AppRouter;
