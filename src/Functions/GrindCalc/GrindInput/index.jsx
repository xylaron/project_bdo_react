import React from "react";
import Menu from "./Menu";

export default function GrindInput({ updateInputData }) {
  return (
    <div>
      <Menu updateInputData={(data) => updateInputData(data)} />
    </div>
  );
}
