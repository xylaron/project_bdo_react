import React from "react";
import GrindInputMenu from "./GrindInputMenu";
import GrindTable from "./GrindTable";

export default function GrindCalc() {
  return (
    <div>
      <div>
        <GrindInputMenu />
      </div>
      <div className="pt-5">
        <GrindTable />
      </div>
    </div>
  );
}
