import React, { createContext, useEffect, useState } from "react";
import GrindInput from "../GrindInput";
import Common from "../../../Components/Common";
import Debug from "./Debug";
import { CurrencyDollarIcon } from "@heroicons/react/solid";
import { sycraia } from "../../../database";

export const InputContext = createContext();

const Table = ({ updateCalcData, itemPrice, isLoading }) => {
  const [itemData, setItemData] = useState([]);

  let total_output = [];
  let item_icons = [];

  useEffect(() => {
    console.log("updating table");
    updateCalcData(itemData);
  }, [itemData, itemPrice]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateInputData = (data) => {
    console.log("received user input data");
    const newItemData = [...itemData];
    newItemData.push(data);
    console.log("total item data: ", newItemData);
    setItemData(newItemData);
  };

  const calcSilverPerHr = (itemData, j) => {
    let x = 0;
    for (let i = 0; i < sycraia.length; i++) {
      x += itemData[j][i] * itemPrice[i];
    }
    return Common.formatNumShort(x);
  };

  for (let i = 0; i < sycraia.length; i++) {
    item_icons.push(
      <th key={"tableicon" + i} className="group h-[30px] w-[80px] p-2">
        <div className="relative">
          <a
            href={`https://bdocodex.com/us/item/${sycraia[i].id}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="item-icon" src={sycraia[i].icon} alt="icon" />
          </a>
        </div>
      </th>
    );
  }

  item_icons.push(
    <th key={"itemTotal"} className="w-[80px] p-2">
      <CurrencyDollarIcon className="mx-auto w-12" />
    </th>
  );
  for (let j = 0; j < itemData.length; j++) {
    let single_output = [];
    for (let i = 0; i < sycraia.length; i++) {
      single_output.push(
        <td
          key={`itemData[${j}][${i}]`}
          className={`p-2 text-center font-medium ${
            j % 2 === 0 ? "bg-zinc-700/25" : "bg-zinc-700/50"
          }`}
        >
          {itemData[j][i]}
        </td>
      );
    }
    single_output.push(
      <td
        key={`itemData[${j}]total`}
        className={`p-2 text-center font-medium ${
          j % 2 === 0 ? "bg-zinc-700/25" : "bg-zinc-700/50"
        }`}
      >
        {isLoading ? "Loading..." : calcSilverPerHr(itemData, j)}
      </td>
    );
    total_output.push(<tr key={"singleOutput" + j}>{single_output}</tr>);
  }

  return (
    <div className="flex overflow-auto">
      <table className="relative overflow-hidden rounded-xl bg-zinc-800">
        <thead className="">
          <tr>{item_icons}</tr>
        </thead>
        <tbody className="">{total_output}</tbody>
      </table>

      <div className="ml-5">
        <InputContext.Provider value={updateInputData}>
          <GrindInput />
        </InputContext.Provider>
      </div>
      <Debug setItemData={setItemData} updateInputData={updateInputData} />
    </div>
  );
};

export default Table;
