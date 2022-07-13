/* eslint-disable no-loop-func */
import React, { useState } from "react";
import AddButton from "../../../Components/AddButton";
import { sycraia } from "../../../database";

export default function UserInput({ toggleModal, update }) {
  let obj = {};
  let item_icons = [];
  let input_boxes = [];

  for (let i = 0; i < sycraia.length; i++) {
    obj[`item${i}`] = "0";
  }

  const [itemInput, setItemInput] = useState(obj);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setItemInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(Object.values(itemInput));
    const itemInputConv = Object.values(itemInput).map((str) => {
      return Number(str);
    });
    console.log(itemInputConv);
    update(itemInputConv);
  };

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
              name={`item${i}`}
              className="input rounded-lg border-zinc-700 w-20 px-2 py-1 text-center font-bold text-lg bg-zinc-900/75"
              placeholder="0"
              onChange={handleChange}
            />
          </td>
        )
      : input_boxes.push(
          <td>
            <input
              type="number"
              name={`item${i}`}
              className="input rounded-lg border-zinc-700 w-20 px-2 py-1 text-center font-bold text-lg bg-zinc-900"
              placeholder="0"
              onChange={handleChange}
            />
          </td>
        );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-zinc-800 rounded-xl p-3">
          <table className="mx-auto">
            <thead>
              <tr>{item_icons}</tr>
            </thead>
            <tbody>
              <tr>{input_boxes}</tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <AddButton type="submit" onClick={toggleModal} />
        </div>
      </form>
    </div>
  );
}
