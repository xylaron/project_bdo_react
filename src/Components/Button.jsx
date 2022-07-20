import React from "react";

const btnColorList = {
  red: "bg-red-500 hover:bg-red-500/60 disabled:bg-red-900",
  green: "bg-green-600 hover:bg-green-600/60 disabled:bg-green-900",
  blue: "bg-blue-600 hover:bg-blue-600/60 disabled:bg-blue-900",
};

const btnSizeList = {
  small: "btn-sm",
  medium: "btn-md",
  large: "btn-lg",
};

const Button = ({ disabled, type, color, onClick, padding, children, btnSize }) => (
  <button
    type={type}
    disabled={disabled || false}
    onClick={onClick}
    className={`btn ${btnSizeList[btnSize] || btnSizeList.medium} rounded-xl p-${padding} 
    ${btnColorList[color] || btnColorList.green} 
    border-none align-middle text-xl font-medium leading-none`}
  >
    {children}
  </button>
);

export default Button;
