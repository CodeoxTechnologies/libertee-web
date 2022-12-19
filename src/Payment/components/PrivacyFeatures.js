import React, { useState } from "react";
import { Radio } from "@mui/material";
import { useStateContext } from "../../utils/StateContext";

const PrivacyFeatures = () => {
  const { privacyOptionCharge, setPrivacyOptionCharge, shippingOptions } = useStateContext();
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
              checked={privacyOptionCharge === shippingOptions.scheduled_delivery}
              onChange={() => setPrivacyOptionCharge(shippingOptions.scheduled_delivery)}
              style={{ color: "#000" }}
            />
          </span>
          <p className="price">Rs 100</p>
        </div>
        <div className="delivery-option-and-privacy-option-body-item">
          <p className="options">Delivery on OTP only</p>
          <span>
            <Radio
              checked={privacyOptionCharge === shippingOptions.otp_delivery}
              onChange={() => setPrivacyOptionCharge(shippingOptions.otp_delivery)}
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
