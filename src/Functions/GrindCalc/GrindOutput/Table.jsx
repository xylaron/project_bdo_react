import React, { useEffect, useState } from "react";
import GrindInput from "../GrindInput";
import Common from "../../../Components/Common";
import Button from "../../../Components/Button";
import { CurrencyDollarIcon } from "@heroicons/react/solid";
import { sycraia } from "../../../database";
import { WARNING } from "../../../Components/Strings";

const Table = ({ updateCalcData }) => {
  let item_icons = [];
  let total_output = [];

  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    console.log("updating table");
    updateCalcData(itemData);
  }, [itemData]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateInputData = (data) => {
    console.log("received user input data");
    const newItemData = [...itemData];
    newItemData.push(data);
    console.log("total item data: ", newItemData);
    setItemData(newItemData);
  };

  for (let i = 0; i < sycraia.length; i++) {
    item_icons.push(
      <th key={"tableicon" + i} className="group h-[30px] w-[80px] p-2">
        <div className="relative">
          <a
            href={`https://bdocodex.com/us/item/${sycraia[i].id}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="item-icon" src={sycraia[i].icon} alt="icon" />
          </a>
          {/* <div className="absolute flex inset-0 justify-center items-center bg-zinc-900 opacity-0 group-hover:opacity-100 duration-150 z-10 p-2 text-md">
            {sycraia[i].name}
          </div> */}
        </div>
      </th>
    );
  }

  const calcSilverPerHr = (itemData, j) => {
    let x = 0;
    for (let i = 0; i < sycraia.length; i++) {
      x += itemData[j][i] * sycraia[i].price;
    }
    return Common.formatNumber(x);
  };

  item_icons.push(
    <th key={"itemTotal"} className="w-[80px] p-2">
      <CurrencyDollarIcon className="mx-auto w-12" />
    </th>
  );
  for (let j = 0; j < itemData.length; j++) {
    let single_output = [];
    for (let i = 0; i < sycraia.length; i++) {
      single_output.push(
        <td
          key={`itemData[${j}][${i}]`}
          className={`p-2 text-center font-medium ${
            j % 2 === 0 ? "bg-zinc-700/25" : "bg-zinc-700/50"
          }`}
        >
          {itemData[j][i]}
        </td>
      );
    }
    single_output.push(
      <td
        key={`itemData[${j}]total`}
        className={`p-2 text-center font-medium ${
          j % 2 === 0 ? "bg-zinc-700/25" : "bg-zinc-700/50"
        }`}
      >
        {calcSilverPerHr(itemData, j)}
      </td>
    );
    total_output.push(<tr key={"singleOutput" + j}>{single_output}</tr>);
  }

  return (
    <div>
      <div className="flex">
        <table className="relative overflow-hidden rounded-xl bg-zinc-800">
          <thead className="">
            <tr>{item_icons}</tr>
          </thead>
          <tbody className="">{total_output}</tbody>
        </table>
        <div className="ml-5">
          <GrindInput updateInputData={updateInputData} />
        </div>
        {/* DEBUG BUTTONS TO CLEAR/ADD RANDOM DATA */}
        <div className="ml-5">
          <Button
            type="button"
            color="red"
            padding="3"
            onClick={() => {
              if (window.confirm(WARNING.CLEAR_GRIND_TABLE)) {
                console.log("!!!TABLE PURGED!!!");
                setItemData([]);
              }
            }}
          >
            Reset
          </Button>
        </div>
        <div className="ml-5">
          <Button
            type="button"
            color="blue"
            padding="3"
            onClick={() =>
              updateInputData([
                Common.randomNum(7500, 8500),
                Common.randomNum(150, 300),
                Common.randomNum(50, 55),
                Common.randomNum(50, 55),
                Common.randomNum(15, 25),
                Common.randomNum(5, 10),
                Common.randomNum(0, 3),
                Common.randomNum(0, 6),
                Common.randomNum(5, 15),
                Common.randomNum(0, 2),
                Common.randomNum(30, 60),
                Common.randomNum(40, 80),
                Common.randomNum(40, 80),
              ])
            }
          >
            Random
          </Button>
        </div>
        {/*---------------------------------------*/}
      </div>
    </div>
  );
};

export default Table;
