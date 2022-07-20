import React from "react";
import { NavLink } from "react-router-dom";
import { NAV } from "./Strings";

const Navbar = () => (
  <div className="navbar fixed z-20 bg-zinc-800 shadow-xl">
    <div className="flex-1">
      <NavLink
        to="/#"
        className="mx-5 text-4xl font-bold normal-case leading-none hover:text-white/60"
      >
        {NAV.NAME}
      </NavLink>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li key={"tictactoe"}>
          <NavLink to="/tictactoe" className="text-lg font-bold hover:text-white/60">
            {NAV.TIC_GAME}
          </NavLink>
        </li>
        <li key={"grindcalc"}>
          <NavLink to="/grindcalc" className="text-lg font-bold hover:text-white/60">
            {NAV.GRIND_CALC}
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
