import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-zinc-900">
      <div className="flex-1">
        <NavLink
          to="/#"
          className="btn btn-ghost normal-case text-xl text-white"
        >
          Scuffed
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/tictactoe" className="text-white">
              Tic Tac Toe
            </NavLink>
          </li>
          <li>
            <NavLink to="/grindcalc" className="text-white">
              Grind Calculator
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
