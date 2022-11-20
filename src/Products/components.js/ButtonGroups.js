import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const ButtonGroups = () => {
  const [counter, setCounter] = useState(1);
  return (
    <ButtonGroup size="large" className="button-group">
      {counter && (
        <button
          className="button-white counter-size button-group-item-3"
          onClick={() => (counter >= 2 ? setCounter(counter - 1) : null)}
        >
          <span >-</span>
        </button>
      )}
      {counter && (
        <button className="button-white counter-size button-group-item-2">
          <span style={{}}>{counter}</span>{" "}
        </button>
      )}
      <button
        className="button-white counter-size button-group-item-1"
        onClick={() => setCounter(counter + 1)}
      >
        <span>+</span>
      </button>
    </ButtonGroup>
  );
};
export default ButtonGroups;
