import React from "react";
import GrindInput from "../GrindInput";

export default class Calc extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-2 bg-zinc-800 rounded-xl p-5">
          <div className="text-white text-3xl font-bold">Total Silver Made</div>
          <div className="text-white pt-3 text-5xl font-bold">12,345,678,900</div>
        </div>
        <div className="col-span-2 bg-zinc-800 rounded-xl p-5">
          <div className="text-white text-3xl font-bold">Average Silver Per Hour</div>
          <div className="text-white pt-3 text-5xl font-bold">876,543,210</div>
        </div>
        <div>
          <GrindInput />
        </div>
      </div>
    );
  }
}
