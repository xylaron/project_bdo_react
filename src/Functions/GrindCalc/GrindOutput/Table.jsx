import React from "react";
import { sycraia } from "../../../database";

export default class Table extends React.Component {
  render() {
    let item_icons = [];
    for (let i = 0; i < sycraia.length; i++) {
      item_icons.push(
        <th className="w-[100px] h-[30px] p-2">
          <img className="mx-auto" src={sycraia[i].icon} alt="icon" />
        </th>
      );
    }
    item_icons.push(<th className="w-[100px] text-white p-2">Silver/hr</th>);

    let test_output = [];
    for (let i = 0; i < sycraia.length + 1; i++) {
      if (i % 2 === 0) test_output.push(<td className="text-center font-bold bg-zinc-700/25 text-white p-2">12,345</td>);
      else test_output.push(<td className="text-center font-bold bg-zinc-700/50 text-white p-2">12,345</td>);
    }

    let print_test_output = [];
    for (let i = 0; i < 10; i++) {
      print_test_output.push(<tr>{test_output}</tr>);
    }

    return (
      <div>
        <div className="">
          <table className="relative bg-zinc-800 rounded-xl overflow-y-scroll">
            <thead className="">{item_icons}</thead>
            <tbody className="">{print_test_output}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
