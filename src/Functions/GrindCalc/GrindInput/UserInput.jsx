/* eslint-disable no-loop-func */
import React, { useState, useContext, useEffect } from "react";
import Button from "Components/Button";
import { InputContext } from "../GrindOutput/Table";
import { PlusIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";
import { sycraia } from "database";

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

  const [familyFame, setFamilyFame] = useState(0);
  const [hasValuePack, setHasValuePack] = useState(false);

  useEffect(() => {
    console.log("button status: ", hasValuePack);
  }, [hasValuePack]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInputData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    const itemInput = Object.values(userInputData).slice(0, sycraia.length + 1);
    const itemInputConv = itemInput.map((str) => {
      return Number(str);
    });
    const fullUserInput = itemInputConv.push(Number(familyFame), hasValuePack);
    console.log(fullUserInput);
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
      <div className="divbox mt-5 flex">
        <div className="">
          <label className="label">
            <span className="label-text font-bold">Family Fame</span>
          </label>
          <div className="flex items-center justify-center">
            <input
              type="number"
              name="family-fame"
              className="input w-20 rounded-lg border-zinc-700 bg-zinc-900 px-2 py-1 text-center text-lg font-bold"
              placeholder="0"
              onChange={(event) => setFamilyFame(event.target.value)}
            />
          </div>
        </div>
        <div className="ml-2">
          <label className="label">
            <span className="label-text font-bold">Value Pack?</span>
          </label>
          <div className="flex h-[48px] w-[80px] items-center justify-center">
            <Switch
              checked={hasValuePack}
              onChange={setHasValuePack}
              className={`${hasValuePack ? "bg-green-500" : "bg-zinc-400"}
          relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${hasValuePack ? "translate-x-8" : "translate-x-0"}
            pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
        </div>
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
