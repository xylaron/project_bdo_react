import React from "react";
import { NavLink } from "react-router-dom";
import { NAV } from "./Strings";

const Navbar = () => (
  <div className="navbar fixed z-30 border-white bg-zinc-800 shadow-xl">
    <div className="flex-1">
      <NavLink to="/#" className="mx-5 text-[30px] font-bold normal-case text-white">
        {NAV.NAME}
      </NavLink>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li key={"tictactoe"}>
          <NavLink to="/tictactoe" className="font-bold text-white">
            {NAV.TIC_GAME}
          </NavLink>
        </li>
        <li key={"grindcalc"}>
          <NavLink to="/grindcalc" className="font-bold text-white">
            {NAV.GRIND_CALC}
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
