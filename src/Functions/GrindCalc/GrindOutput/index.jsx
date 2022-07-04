import React from "react";
import Table from "./Table";
import Calc from "./Calc";

export default function GrindOutput() {
  return (
    <div>
      <div>
        <Calc />
      </div>
      <div className="mt-5">
        <Table />
      </div>
    </div>
  );
}
