import React, { useState } from "react";
import { sycraia } from "../../../database";
import Table from "./Table";

export default function Calc() {
  const [totalSilverPerHr, setTotalSilverPerHr] = useState(0);
  const [avgSilverPerHr, setAvgSilverPerHr] = useState(0);

  const updateData = (itemData) => {
    calcTotalSilverPerHr(itemData);
    calcAvgSilverPerHr(calcTotalSilverPerHr(itemData));
  };

  const calcTotalSilverPerHr = (itemData) => {
    let x = 0;
    for (let j = 0; j < itemData.length; j++) {
      for (let i = 0; i < sycraia.length; i++) {
        x += itemData[j][i] * sycraia[i].price;
      }
    }
    setTotalSilverPerHr(x);
  };

  const calcAvgSilverPerHr = (itemData) => setAvgSilverPerHr(totalSilverPerHr / itemData.length);

  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-2 divbox">
          <div className="text-3xl font-bold">Total Silver Made</div>
          <div className="pt-3 text-5xl font-bold">
            {Math.round(totalSilverPerHr).toLocaleString()}
          </div>
        </div>
        <div className="col-span-2 divbox">
          <div className="text-3xl font-bold">Average Silver Per Hour</div>
          <div className="pt-3 text-5xl font-bold">
            {Math.round(avgSilverPerHr).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Table update={updateData} />
      </div>
    </div>
  );
}
