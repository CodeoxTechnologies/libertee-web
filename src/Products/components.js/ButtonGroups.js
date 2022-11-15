import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class GroupedButtons extends React.Component {
  state = { counter: 1 };

  handleIncrement = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    if (this.state.counter > 1) {
      this.setState((state) => ({ counter: state.counter - 1 }));
    }
  };
  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <ButtonGroup size="large" style={{ padding: "30px" }}>
        <button
          className="button-black counter-size "
          onClick={this.handleIncrement}
        >
          <span style={{ fontSize: "30px" }}> +</span>
        </button>
        {displayCounter && (
          <button className="counter-size">
            <span style={{ fontSize: "20px", fontFamily: "Montserrat" }}>
              {this.state.counter}
            </span>{" "}
          </button>
        )}
        {displayCounter && (
          <button
            className="button-black counter-size"
            onClick={this.handleDecrement}
          >
            <span style={{ fontSize: "30px" }}>-</span>
          </button>
        )}
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;
