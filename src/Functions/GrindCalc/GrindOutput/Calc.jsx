import React, { useState, useEffect } from "react";
import { sycraia } from "../../../database";
import { INFO } from "../../../Components/Strings";
import Common from "../../../Components/Common";
import Table from "./Table";
import getItemPriceData from "../../../API/getItemPriceData";

const Calc = () => {
  const [totalSilver, setTotalSilver] = useState(0);
  const [avgSilverPerHr, setAvgSilverPerHr] = useState(0);
  const [avgTrashLoot, setAvgTrashLoot] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  const [itemPrice, setItemPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItemPriceData().then((array) => {
      console.log("item price list", array);
      setItemPrice(array);
      setIsLoading(false);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const updateCalcData = (itemData) => {
    console.log("calculating data");
    calcTotalSilverPerHr(itemData);
    setTotalHours(itemData.length);
  };

  const calcTotalSilverPerHr = (itemData) => {
    let x = 0;
    for (let j = 0; j < itemData.length; j++) {
      for (let i = 0; i < sycraia.length; i++) {
        x += itemData[j][i] * itemPrice[i];
      }
    }
    console.log("updating total silver");
    setTotalSilver(x);
    console.log("current silver/hr: ", Common.formatNumLong(x));
    calcAvgSilverPerHr(x, itemData);
  };

  const calcAvgSilverPerHr = (x, itemData) => {
    console.log("current hours: ", itemData.length);
    console.log("avg silver/hr: ", Common.formatNumLong(x / itemData.length));
    setAvgSilverPerHr(x / itemData.length);
    calcAvgTrashLoot(itemData);
  };

  const calcAvgTrashLoot = (itemData) => {
    let x = 0;
    for (let i = 0; i < itemData.length; i++) {
      x += itemData[i][0];
    }
    console.log("avg trash loot: ", Common.formatNumLong(x / itemData.length));
    setAvgTrashLoot(x / itemData.length);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <div className="divbox col-span-1">
          <div className="text-2xl font-medium">{INFO.TOTAL_SILVER}</div>
          <div className="pt-2 text-4xl font-bold">
            {isLoading ? "Loading..." : Common.formatNumLong(totalSilver)}
          </div>
        </div>
        <div className="divbox col-span-1">
          <div className="text-2xl font-medium">{INFO.AVG_SILVER}</div>
          <div className="pt-2 text-4xl font-bold">
            {isLoading
              ? "Loading..."
              : isNaN(avgSilverPerHr)
              ? "0"
              : Common.formatNumLong(avgSilverPerHr)}
          </div>
        </div>
        <div className="divbox col-span-1">
          <div className="text-2xl font-medium">{INFO.AVG_TRASH}</div>
          <div className="pt-2 text-4xl font-bold">
            {isNaN(avgTrashLoot) ? "0" : Common.formatNumLong(avgTrashLoot)}
          </div>
        </div>
        <div className="divbox col-span-1">
          <div className="text-2xl font-medium">{INFO.TOTAL_HOUR}</div>
          <div className="pt-2 text-4xl font-bold">{Common.formatNumLong(totalHours)}</div>
        </div>
      </div>
      <div className="mt-5">
        <Table updateCalcData={updateCalcData} itemPrice={itemPrice} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Calc;
