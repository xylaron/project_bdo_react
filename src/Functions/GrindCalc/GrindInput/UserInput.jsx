/* eslint-disable no-loop-func */
import React, { useState, useContext } from "react";
import Button from "../../../Components/Button";
import { InputContext } from "../GrindOutput/Table";
import { PlusIcon } from "@heroicons/react/solid";
import { sycraia } from "../../../database";
import UserAttr from "./UserAttr";

const UserInput = ({ toggleModal }) => {
  let obj = {};
  let item_icons = [];
  let input_boxes = [];

  const updateInputData = useContext(InputContext);
  const [isDisabled, setIsDisabled] = useState(false);

  for (let i = 0; i < sycraia.length; i++) {
    obj[`item${i}`] = "0";
  }

  const [userInputData, setUserInputData] = useState(obj);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInputData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    const itemInput = Object.values(userInputData).slice(0, sycraia.length + 1);
    // const inputSettings = Object.values(userInputData).slice(sycraia.length);
    const itemInputConv = itemInput.map((str) => {
      return Number(str);
    });
    console.log(userInputData);
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
      <div className="divbox">
        <table className="mx-auto">
          <thead>
            <tr>{item_icons}</tr>
          </thead>
          <tbody>
            <tr>{input_boxes}</tr>
          </tbody>
        </table>
      </div>
      <UserAttr id="family-fame" handleChange={handleChange}>
        Family Fame
      </UserAttr>
      <div className="mt-5">
        <Button type="submit" onClick={toggleModal} disabled={isDisabled} color="green" padding="3">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </div>
    </form>
  );
};

export default UserInput;
