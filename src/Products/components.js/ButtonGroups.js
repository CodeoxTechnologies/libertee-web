import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useStateContext } from "../../utils/StateContext";

const ButtonGroups = () => {
  const { qty, decQty, incQty } = useStateContext();
  return (
    <ButtonGroup size="large" className="button-group">
      {qty && (
        <button
          className="button-white counter-size button-group-item-3"
          onClick={() => decQty()}
        >
          <span>-</span>
        </button>
      )}
      {qty && (
        <button className="button-white counter-size button-group-item-2">
          <span style={{}}>{qty}</span>{" "}
        </button>
      )}
      <button
        className="button-white counter-size button-group-item-1"
        onClick={() => incQty()}
      >
        <span>+</span>
      </button>
    </ButtonGroup>
  );
};
export default ButtonGroups;
