import React from "react";
import { Routes, Route } from "react-router-dom";
import TicTacToe from "../TicTacToe";
import GrindCalc from "../GrindCalc";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<TicTacToe />} />
      <Route path="/grindcalc" element={<GrindCalc />} />
    </Routes>
  );
}
