import React from "react";

export default function AddButton(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="btn btn-md rounded-xl bg-green-600 bg-opacity-100 text-xl font-bold border-none hover:bg-green-600 hover:bg-opacity-60"
    >
      Add
    </button>
  );
}
