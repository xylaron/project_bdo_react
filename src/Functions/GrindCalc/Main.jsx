import React from "react";
import GrindTable from "./GrindTable";
import GrindInputMenu from "./GrindInputMenu";

export default function Main() {
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
