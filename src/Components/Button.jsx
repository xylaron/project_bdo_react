import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`btn btn-md rounded-xl p-${props.padding} bg-${props.colour} text-xl font-medium border-none hover:bg-${props.colour}/60`}
    >
      {props.content}
    </button>
  );
}
