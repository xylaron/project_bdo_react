import React from "react";
import GrindInput from "./GrindInput";
import GrindOutput from "./GrindOutput";

export default function GrindCalc() {
  return (
    <div>
      <div>
        <GrindInput />
      </div>
      <div className="pt-5">
        <GrindOutput />
      </div>
    </div>
  );
}
