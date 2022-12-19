import React, { useState } from "react";
import { Radio } from "@mui/material";

const DeliveryOption = () => {
  const [selectedValue, setSelectedValue] = useState(true);
  return (
    <div className="delivery-option-and-privacy-option">
      <div className="delivery-option-and-privacy-option-heading">
        <h3>Delivery Options</h3>
      </div>
      <div className="delivery-option-and-privacy-option-body">
        <div className="delivery-option-and-privacy-option-body-item">
          <p className="options">Regular Dellivery (up to 7 days) </p>
          <span>
            <Radio
              checked={selectedValue}
              onChange={() => setSelectedValue(true)}
              style={{ color: "#000" }}
            />
          </span>
          <p>Free</p>
        </div>
        <div className="delivery-option-and-privacy-option-body-item">
          <p className="options">Fast Dellivery (3 days max) </p>
          <span>
            <Radio
              checked={!selectedValue}
              onChange={() => setSelectedValue(false)}
              style={{ color: "#000" }}
            />
          </span>
          <p className="price">Rs 120</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOption;
