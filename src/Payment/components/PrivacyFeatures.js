import React, { useState } from "react";
import { Radio } from "@mui/material";

const PrivacyFeatures = () => {
  const [value, setValue] = useState(true);
  return (
    <div className="delivery-option-and-privacy-option">
      <div className="delivery-option-and-privacy-option-heading">
        <h3>Additional privacy features</h3>
      </div>
      <div className="delivery-option-and-privacy-option-body">
        <div className="delivery-option-and-privacy-option-body-item">
          <p className="options">Schedule the date and time</p>
          <span>
            <Radio
              checked={value}
              onChange={() => setValue(true)}
              style={{ color: "#000" }}
            />
          </span>
          <p className="price">Rs 100</p>
        </div>
        <div className="delivery-option-and-privacy-option-body-item">
          <p className="options">Delivery on OTP only</p>
          <span>
            <Radio
              checked={!value}
              onChange={() => setValue(false)}
              style={{ color: "#000" }}
            />
          </span>
          <p className="price">Rs 40</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyFeatures;
