import React from "react";
import { WARNING } from "../../../Components/Strings";
import Button from "../../../Components/Button";
import Common from "../../../Components/Common";

const Debug = ({ setItemData, updateInputData }) => {
  return (
    <div className="flex">
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
          Sample
        </Button>
      </div>
    </div>
  );
};

export default Debug;
