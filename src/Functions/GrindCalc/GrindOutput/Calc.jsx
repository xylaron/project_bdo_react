import React, { useState } from "react";
import { sycraia } from "../../../database";
import Table from "./Table";

export default function Calc() {
  const [totalSilver, setTotalSilver] = useState(0);
  const [avgSilverPerHr, setAvgSilverPerHr] = useState(0);
  const [avgTrashLoot, setAvgTrashLoot] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  const updateCalcData = (itemData) => {
    console.log("calculating data");
    calcTotalSilverPerHr(itemData);
    setTotalHours(itemData.length);
  };

  const calcTotalSilverPerHr = (itemData) => {
    let x = 0;
    for (let j = 0; j < itemData.length; j++) {
      for (let i = 0; i < sycraia.length; i++) {
        x += itemData[j][i] * sycraia[i].price;
      }
    }
    console.log("updating total silver");
    setTotalSilver(x);
    console.log("current silver/hr: ", Math.round(x).toLocaleString());
    calcAvgSilverPerHr(x, itemData);
  };

  const calcAvgSilverPerHr = (x, itemData) => {
    console.log("current hours: ", itemData.length);
    console.log("avg silver/hr: ", Math.round(x / itemData.length).toLocaleString());
    setAvgSilverPerHr(x / itemData.length);
    calcAvgTrashLoot(itemData);
  };

  const calcAvgTrashLoot = (itemData) => {
    let x = 0;
    for (let i = 0; i < itemData.length; i++) {
      x += itemData[i][0];
    }
    console.log("avg trash loot: ", Math.round(x / itemData.length).toLocaleString());
    setAvgTrashLoot(x / itemData.length);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1 divbox">
          <div className="text-2xl font-medium">Total Silver Made</div>
          <div className="pt-2 text-4xl font-bold">{Math.round(totalSilver).toLocaleString()}</div>
        </div>
        <div className="col-span-1 divbox">
          <div className="text-2xl font-medium">Average Silver Per Hour</div>
          <div className="pt-2 text-4xl font-bold">
            {isNaN(avgSilverPerHr) ? "0" : Math.round(avgSilverPerHr).toLocaleString()}
          </div>
        </div>
        <div className="col-span-1 divbox">
          <div className="text-2xl font-medium">Average Trash Loot Per Hour</div>
          <div className="pt-2 text-4xl font-bold">
            {isNaN(avgTrashLoot) ? "0" : Math.round(avgTrashLoot).toLocaleString()}
          </div>
        </div>
        <div className="col-span-1 divbox">
          <div className="text-2xl font-medium">Total Hours</div>
          <div className="pt-2 text-4xl font-bold">{Math.round(totalHours).toLocaleString()}</div>
        </div>
      </div>
      <div className="mt-5">
        <Table updateCalcData={updateCalcData} />
      </div>
    </div>
  );
}
