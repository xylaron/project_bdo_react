import React from "react";

export default function Button({ type, color, onClick, padding, children }) {
  const colors = {
    red: "bg-red-500 hover:bg-red-500/60",
    green: "bg-green-600 hover:bg-green-600/60",
    blue: "bg-blue-600 hover:bg-blue-600/60",
  };

  const colorClass = colors[color];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-md rounded-xl p-${padding} ${colorClass} border-none text-xl font-medium`}
    >
      {children}
    </button>
  );
}
