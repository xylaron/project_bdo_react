import React from "react";
import { sycraia } from "../../../database";

export let data_buffer = [];

export default function UserInput({ toggleModal }) {
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
            <input
              type="number"
              className="input rounded-lg border-zinc-700 w-20 px-2 py-1 text-center text-white font-bold text-lg bg-zinc-900/75"
              placeholder="0"
            />
          </td>
        )
      : input_boxes.push(
          <td>
            <input
              type="number"
              className="input rounded-lg border-zinc-700 w-20 px-2 py-1 text-center text-white font-bold text-lg bg-zinc-900"
              placeholder="0"
            />
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
        <button
          type="button"
          onClick={toggleModal}
          className="btn btn-md rounded-xl bg-green-600 bg-opacity-100 text-xl text-white font-bold border-none hover:bg-green-600 hover:bg-opacity-80"
        >
          Add
        </button>
      </div>
    </div>
  );
}
