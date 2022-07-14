import React from "react";
import { HOME } from "../../Components/Strings";

export default function HomePage() {
  let table = [];
  for (let i = 0; i < HOME.TECH_TABLE_CONTENT.length; i++) {
    table.push(
      <tr>
        <td>{i + 1}</td>
        <td>{HOME.TECH_TABLE_CONTENT[i].NAME}</td>
        <td>{HOME.TECH_TABLE_CONTENT[i].DESC}</td>
      </tr>
    );
  }

  return (
    <div className="">
      <div className="divbox">
        <div className="text-xl font-bold mb-10">{HOME.WELCOME}</div>
        <div className="text-lg">{HOME.INTRO} </div>
        <div className="text-lg mb-10">{HOME.GOAL} </div>
        <div className="text-lg mb-10">{HOME.FUNC} </div>
      </div>
      <div>
        <div className="divbox mt-5">
          <div className="text-lg mb-5">{HOME.TECH_INTRO}</div>
          <table className="table table-compact min-w-screen">
            <thead>
              <tr>
                <th></th>
                <th>{HOME.TECH_TABLE_HEADER_NAME}</th>
                <th>{HOME.TECH_TABLE_HEADER_DESC}</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
