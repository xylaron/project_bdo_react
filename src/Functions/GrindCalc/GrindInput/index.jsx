import React from "react";
import Menu from "./Menu";

const GrindInput = ({ updateInputData }) => (
  <div>
    <Menu updateInputData={(data) => updateInputData(data)} />
  </div>
);

export default GrindInput;
