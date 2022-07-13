import React, { useState } from "react";
import GrindInput from "../GrindInput";
import { common } from "../../../Components/Common";
import { sycraia, testData } from "../../../database";

export default function Table({ update }) {
  let item_icons = [];
  let total_output = [];

  const [itemData, setItemData] = useState(testData);

  const handleUpdate = (data) => {
    console.log("received user input data");
    const newItemData = [...itemData];
    newItemData.push(data);
    console.log(newItemData);
    setItemData(newItemData);
    update(newItemData);
  };

  const initTableData = () => {
    console.log("rendering table");
    update(itemData);
  };

  initTableData();
  for (let i = 0; i < sycraia.length; i++) {
    item_icons.push(
      <th className="w-[80px] h-[30px] p-2">
        <img className="mx-auto" src={sycraia[i].icon} alt="icon" />
      </th>
    );
  }

  const calcSilverPerHr = (itemData, j) => {
    let x = 0;
    for (let i = 0; i < sycraia.length; i++) {
      x += itemData[j][i] * sycraia[i].price;
    }
    return common.formatNumber(x);
  };

  item_icons.push(<th className="w-[80px] p-2">Silver/hr</th>);
  for (let j = 0; j < itemData.length; j++) {
    let single_output = [];
    for (let i = 0; i < sycraia.length; i++) {
      j % 2 === 0
        ? single_output.push(
            <td className="text-center font-bold bg-zinc-700/25 p-2">{itemData[j][i]}</td>
          )
        : single_output.push(
            <td className="text-center font-bold bg-zinc-700/50 p-2">{itemData[j][i]}</td>
          );
    }
    single_output.push(
      <td className="text-center font-bold p-2">{calcSilverPerHr(itemData, j)}</td>
    );
    total_output.push(<tr>{single_output}</tr>);
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
          <GrindInput update={handleUpdate} />
        </div>
      </div>
    </div>
  );
}
