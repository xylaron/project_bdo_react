import React from "react";
import { sycraia } from "../../../database";

export default function UserInput({ closeModal }) {
  let item_icons = [];
  let input_boxes = [];
  for (let i = 0; i < sycraia.length; i++) {
    item_icons.push(
      <th className="w-[80px] h-[30px] p-2">
        <img className="mx-auto" src={sycraia[i].icon} alt="icon" />
      </th>
    );

    i % 2 === 0
      ? input_boxes.push(
          <td>
            <input type="text" className="input rounded-lg border-none w-[80px] px-2 text-center text-white font-bold text-lg bg-zinc-900/75"></input>
          </td>
        )
      : input_boxes.push(
          <td>
            <input type="text" className="input rounded-lg border-none w-[80px] px-2 text-center text-white font-bold text-lg bg-zinc-900"></input>
          </td>
        );
  }
  return (
    <div>
      <div className="bg-zinc-800 rounded-xl p-3">
        <table className="mx-auto">
          <thead>{item_icons}</thead>
          <tbody>{input_boxes}</tbody>
        </table>
      </div>
      <div className="mt-5">
        <button type="button" onClick={closeModal} className="btn btn-md rounded-xl bg-green-600 bg-opacity-100 text-xl text-white font-bold border-none hover:bg-green-600 hover:bg-opacity-80">
          Add
        </button>
      </div>
    </div>
  );
}
