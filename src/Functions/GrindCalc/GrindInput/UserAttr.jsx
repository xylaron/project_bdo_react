import React from "react";

const UserAttr = ({ id, children, handleChange }) => {
  return (
    <div className="divbox mt-5">
      <div className="">
        <label className="label">
          <span className="label-text font-bold">{children}</span>
        </label>
        <input
          type="number"
          name={id}
          className="input w-20 rounded-lg border-zinc-700 bg-zinc-900 px-2 py-1 text-center text-lg font-bold"
          placeholder="0"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UserAttr;
