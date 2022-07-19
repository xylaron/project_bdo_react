import React from "react";

const colorList = {
  red: "bg-red-500 hover:bg-red-500/60 disabled:bg-red-900",
  green: "bg-green-600 hover:bg-green-600/60 disabled:bg-green-900",
  blue: "bg-blue-600 hover:bg-blue-600/60 disabled:bg-blue-900",
};

const Button = ({ disabled, type, color, onClick, padding, children }) => (
  <button
    type={type}
    disabled={disabled || false}
    onClick={onClick}
    className={`btn btn-md rounded-xl p-${padding} ${colorList[color]} border-none align-middle text-xl font-medium leading-none`}
  >
    {children}
  </button>
);

export default Button;
