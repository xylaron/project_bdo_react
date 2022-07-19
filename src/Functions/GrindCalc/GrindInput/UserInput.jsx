/* eslint-disable no-loop-func */
import React, { useState, useContext } from "react";
import Button from "../../../Components/Button";
import { InputContext } from "../GrindOutput/Table";
import { PlusIcon } from "@heroicons/react/solid";
import { sycraia } from "../../../database";

const UserInput = ({ toggleModal }) => {
  let obj = {};
  let item_icons = [];
  let input_boxes = [];

  const updateInputData = useContext(InputContext);
  const [isDisabled, setIsDisabled] = useState(false);

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
    setIsDisabled(true);
    const itemInputConv = Object.values(itemInput).map((str) => {
      return Number(str);
    });
    console.log(itemInputConv);
    updateInputData(itemInputConv);
  };

  for (let i = 0; i < sycraia.length; i++) {
    item_icons.push(
      <th key={"itemicon" + i} className="h-[30px] w-[80px] p-2">
        <img className="item-icon" src={sycraia[i].icon} alt="icon" />
      </th>
    );

    input_boxes.push(
      <td key={"input" + i}>
        <input
          type="number"
          name={`item${i}`}
          className="input w-20 rounded-lg border-zinc-700 bg-zinc-900 px-2 py-1 text-center text-lg font-bold"
          placeholder="0"
          onChange={handleChange}
        />
      </td>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-xl bg-zinc-800 p-3">
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
        <Button type="submit" onClick={toggleModal} disabled={isDisabled} color="green" padding="3">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </div>
    </form>
  );
};

export default UserInput;
