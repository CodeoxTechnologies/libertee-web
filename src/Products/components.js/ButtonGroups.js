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
          className="button-white counter-size "
          onClick={this.handleIncrement}
          style={{ padding: "10px 20px" }}
        >
          <span style={{ fontSize: "30px" }}> +</span>
        </button>
        {displayCounter && (
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
              {this.state.counter}
            </span>{" "}
          </button>
        )}
        {displayCounter && (
          <button
            className="button-white counter-size"
            onClick={this.handleDecrement}
            style={{ padding: "10px 20px" }}
          >
            <span style={{ fontSize: "30px" }}>-</span>
          </button>
        )}
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;
