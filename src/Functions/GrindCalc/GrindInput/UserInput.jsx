/* eslint-disable no-loop-func */
import React, { useState } from "react";
import Button from "../../../Components/Button";
import { PlusIcon } from "@heroicons/react/solid";
import { sycraia } from "../../../database";

export default function UserInput({ toggleModal, updateInputData }) {
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
    console.log("current input data: ", itemInputConv);
    updateInputData(itemInputConv);
  };

  for (let i = 0; i < sycraia.length; i++) {
    item_icons.push(
      <th key={"itemicon" + i} className="w-[80px] h-[30px] p-2">
        <img className="item-icon" src={sycraia[i].icon} alt="icon" />
      </th>
    );

    input_boxes.push(
      <td key={"input" + i}>
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
          <Button
            type="button"
            onClick={toggleModal}
            colour="green-600"
            padding="3"
            content={<PlusIcon className="w-6 h-6" />}
          />
        </div>
      </form>
    </div>
  );
}
