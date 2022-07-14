import React from "react";
import { NavLink } from "react-router-dom";
import { NAV } from "./Strings";

export default function Navbar() {
  return (
    <div className="navbar bg-zinc-800 border-white fixed shadow-xl z-30">
      <div className="flex-1">
        <NavLink to="/#" className="normal-case text-white text-[30px] font-bold mx-5">
          {NAV.NAME}
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li key={"tictactoe"}>
            <NavLink to="/tictactoe" className="text-white font-bold">
              {NAV.TIC_GAME}
            </NavLink>
          </li>
          <li key={"grindcalc"}>
            <NavLink to="/grindcalc" className="text-white font-bold">
              {NAV.GRIND_CALC}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
