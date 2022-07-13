import React from "react";
import Menu from "./Menu";

export default function GrindInput({ update }) {
  return (
    <div>
      <Menu update={(data) => update(data)} />
    </div>
  );
}
