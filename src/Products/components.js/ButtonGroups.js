import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const ButtonGroups = () => {
  const [counter, setCounter] = useState(1);
  return (
    <ButtonGroup size="large" style={{ padding: "30px" }}>
      <button
        className="button-white counter-size "
        onClick={() => setCounter(counter + 1)}
        style={{ padding: "10px 20px" }}
      >
        <span style={{ fontSize: "30px" }}> +</span>
      </button>
      {counter && (
        <button className="button-white counter-size">
          <span
            style={{
              fontSize: "30px",
              fontFamily: "Montserrat",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 20px",
            }}
          >
            {counter}
          </span>{" "}
        </button>
      )}
      {counter && (
        <button
          className="button-white counter-size"
          onClick={() => (counter >= 2 ? setCounter(counter - 1) : null)}
          style={{ padding: "10px 20px" }}
        >
          <span style={{ fontSize: "30px" }}>-</span>
        </button>
      )}
    </ButtonGroup>
  );
};
export default ButtonGroups;
