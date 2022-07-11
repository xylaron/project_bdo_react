import React from "react";
import GrindInput from "../GrindInput";
import { sycraia, testData } from "../../../database";

export function calcSilverPerHr(j) {
  let silverPerHr = 0;
  for (let i = 0; i < sycraia.length; i++) {
    silverPerHr += testData[j][i] * sycraia[i].price;
  }
  return silverPerHr;
}

export function calcTotalSilverPerHr() {
  let totalSilverPerHr = 0;
  for (let j = 0; j < testData.length; j++) {
    for (let i = 0; i < sycraia.length; i++) {
      totalSilverPerHr += testData[j][i] * sycraia[i].price;
    }
  }
  return totalSilverPerHr;
}

export const calcAvgSilverPerHr = () => calcTotalSilverPerHr() / testData.length;

export default function Calc() {
  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-2 divbox">
        <div className="text-white text-3xl font-bold">Total Silver Made</div>
        <div className="text-white pt-3 text-5xl font-bold">
          {Math.round(calcTotalSilverPerHr()).toLocaleString()}
        </div>
      </div>
      <div className="col-span-2 divbox">
        <div className="text-white text-3xl font-bold">Average Silver Per Hour</div>
        <div className="text-white pt-3 text-5xl font-bold">
          {Math.round(calcAvgSilverPerHr()).toLocaleString()}
        </div>
      </div>
      <div>
        <GrindInput />
      </div>
    </div>
  );
}
