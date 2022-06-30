import React from "react";
import { sycraia } from "../../database";

export default class Table extends React.Component {
  render() {
    let item_icons = [];
    for (let i = 0; i < sycraia.length; i++) {
      item_icons.push(
        <th className="w-[72px] h-[30px]">
          <img className="mx-auto" src={sycraia[i].icon} alt="icon" />
        </th>
      );
    }
    item_icons.push(<th className="w-[72px] h-[30px] text-white">Silver/hr</th>);

    let test_output = [];
    for (let i = 0; i < sycraia.length + 1; i++) {
      test_output.push(<td className="text-center font-bold text-white">12,345</td>);
    }

    return (
      <div>
        <div className="">
          <table className="table table-compact bg-zinc-800 rounded-lg">
            <thead className="">{item_icons}</thead>
            <tbody className="border-black">
              <tr>{test_output}</tr>
              <tr>{test_output}</tr>
              <tr>{test_output}</tr>
              <tr>{test_output}</tr>
              <tr>{test_output}</tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
