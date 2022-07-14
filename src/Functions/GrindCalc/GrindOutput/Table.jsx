import React, { useEffect, useState } from "react";
import GrindInput from "../GrindInput";
import Functions from "./Components/Functions";
import Button from "../../../Components/Button";
import { CurrencyDollarIcon } from "@heroicons/react/solid";
import { sycraia } from "../../../database";
import { WARNING } from "../../../Components/Strings";

export default function Table({ updateCalcData }) {
  let item_icons = [];
  let total_output = [];

  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    console.log("updating table");
    updateCalcData(itemData);
  }, [itemData]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateInputData = (data) => {
    console.log("received user input data");
    const newItemData = [...itemData];
    newItemData.push(data);
    console.log("total item data: ", newItemData);
    setItemData(newItemData);
  };

  for (let i = 0; i < sycraia.length; i++) {
    item_icons.push(
      <th key={"tableicon" + i} className="w-[80px] h-[30px] p-2 group">
        <div className="relative">
          <a
            href={`https://bdocodex.com/us/item/${sycraia[i].id}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="item-icon" src={sycraia[i].icon} alt="icon" />
          </a>
          {/* <div className="absolute flex inset-0 justify-center items-center bg-zinc-900 opacity-0 group-hover:opacity-100 duration-150 z-10 p-2 text-md">
            {sycraia[i].name}
          </div> */}
        </div>
      </th>
    );
  }

  const calcSilverPerHr = (itemData, j) => {
    let x = 0;
    for (let i = 0; i < sycraia.length; i++) {
      x += itemData[j][i] * sycraia[i].price;
    }
    return Functions.formatNumber(x);
  };

  item_icons.push(
    <th key={"itemTotal"} className="w-[80px] p-2">
      <CurrencyDollarIcon className="w-12 mx-auto" />
    </th>
  );
  for (let j = 0; j < itemData.length; j++) {
    let single_output = [];
    for (let i = 0; i < sycraia.length; i++) {
      single_output.push(
        <td
          key={`itemData[${j}][${i}]`}
          className={`text-center font-medium p-2 bg-zinc-700/${j % 2 === 0 ? "25" : "50"}`}
        >
          {itemData[j][i]}
        </td>
      );
    }
    single_output.push(
      <td
        key={`itemData[${j}]total`}
        className={`text-center font-medium p-2 bg-zinc-700/${j % 2 === 0 ? "25" : "50"}`}
      >
        {calcSilverPerHr(itemData, j)}
      </td>
    );
    total_output.push(<tr key={"singleOutput" + j}>{single_output}</tr>);
  }

  return (
    <div>
      <div className="flex">
        <table className="relative bg-zinc-800 rounded-xl overflow-hidden">
          <thead className="">
            <tr>{item_icons}</tr>
          </thead>
          <tbody className="">{total_output}</tbody>
        </table>
        <div className="ml-5">
          <GrindInput updateInputData={updateInputData} />
        </div>
        {/* DEBUG BUTTONS TO CLEAR/ADD RANDOM DATA */}
        <div className="ml-5">
          <Button
            type="button"
            colour="red-500"
            padding="3"
            content="Reset"
            onClick={() => {
              if (window.confirm(WARNING.CLEAR_GRIND_TABLE)) {
                console.log("!!!TABLE PURGED!!!");
                setItemData([]);
              }
            }}
          />
        </div>
        <div className="ml-5">
          <Button
            type="button"
            colour="blue-500"
            padding="3"
            content="Random"
            onClick={() =>
              updateInputData([
                Functions.randomNum(7500, 8500),
                Functions.randomNum(150, 300),
                Functions.randomNum(50, 55),
                Functions.randomNum(50, 55),
                Functions.randomNum(15, 25),
                Functions.randomNum(5, 10),
                Functions.randomNum(0, 3),
                Functions.randomNum(0, 6),
                Functions.randomNum(5, 15),
                Functions.randomNum(0, 2),
                Functions.randomNum(30, 60),
                Functions.randomNum(40, 80),
                Functions.randomNum(40, 80),
              ])
            }
          />
        </div>
        {/*---------------------------------------*/}
      </div>
    </div>
  );
}
