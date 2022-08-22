import React from "react";
import { HOME } from "Components/Strings";

let tech_table = [];
for (let i = 0; i < HOME.TECH_TABLE_CONTENT.length; i++) {
  tech_table.push(
    <tr>
      <td>{i + 1}</td>
      <td>{HOME.TECH_TABLE_CONTENT[i].NAME}</td>
      <td>{HOME.TECH_TABLE_CONTENT[i].DESC}</td>
    </tr>
  );
}

const HomePage = () => (
  <>
    <div className="divbox">
      <div className="mb-10 text-xl font-bold">{HOME.WELCOME}</div>
      <div className="text-lg">{HOME.INTRO} </div>
      <div className="mb-10 text-lg">{HOME.GOAL} </div>
      <div className="mb-10 text-lg">{HOME.FUNC} </div>
    </div>
    <div>
      <div className="divbox mt-5">
        <div className="mb-5 text-lg">{HOME.TECH_INTRO}</div>
        <table className="min-w-screen table-compact table">
          <thead>
            <tr>
              <th></th>
              <th>{HOME.TECH_TABLE_HEADER_NAME}</th>
              <th>{HOME.TECH_TABLE_HEADER_DESC}</th>
            </tr>
          </thead>
          <tbody>{tech_table}</tbody>
        </table>
      </div>
    </div>
  </>
);

export default HomePage;
