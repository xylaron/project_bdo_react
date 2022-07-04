import React from "react";
import { sycraia, testData } from "../../../database";
import { calcSilverPerHr } from "./Calc";

export default class Table extends React.Component {
  render() {
    let item_icons = [];
    for (let i = 0; i < sycraia.length; i++) {
      item_icons.push(
        <th className="w-[80px] h-[30px] p-2">
          <img className="mx-auto" src={sycraia[i].icon} alt="icon" />
        </th>
      );
    }
    item_icons.push(<th className="w-[80px] text-white p-2">Silver/hr</th>);

    let total_output = [];
    for (let j = 0; j < testData.length; j++) {
      let single_output = [];
      for (let i = 0; i < sycraia.length; i++) {
        if (j % 2 === 0) single_output.push(<td className="text-center font-bold bg-zinc-700/25 text-white p-2">{testData[j][i]}</td>);
        else single_output.push(<td className="text-center font-bold bg-zinc-700/50 text-white p-2">{testData[j][i]}</td>);
      }
      single_output.push(<td className="text-center font-bold text-white p-2">{Math.round(calcSilverPerHr(j)).toLocaleString()}</td>);
      total_output.push(<tr>{single_output}</tr>);
    }

    return (
      <div>
        <div className="">
          <table className="relative bg-zinc-800 rounded-xl overflow-hidden">
            <thead className="">{item_icons}</thead>
            <tbody className="">{total_output}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
