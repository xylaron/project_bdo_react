import React from "react";

const colorList = {
  red: "bg-red-500 hover:bg-red-500/60",
  green: "bg-green-600 hover:bg-green-600/60",
  blue: "bg-blue-600 hover:bg-blue-600/60",
};

const Button = ({ type, color, onClick, padding, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`btn btn-md rounded-xl p-${padding} ${colorList[color]} border-none text-xl font-medium`}
  >
    {children}
  </button>
);

export default Button;
