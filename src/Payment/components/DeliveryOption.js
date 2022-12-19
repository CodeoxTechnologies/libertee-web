import React, { useState } from "react";
import { Radio } from "@mui/material";
import { useStateContext } from "../../utils/StateContext";

const DeliveryOption = () => {
  const [selectedValue, setSelectedValue] = useState(true);
  const { deliveryOptionCharge, setDeliveryOptionCharge, shippingOptions } = useStateContext();
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
              checked={deliveryOptionCharge === shippingOptions.regular_delivery}
              onChange={() => { setDeliveryOptionCharge(shippingOptions.regular_delivery) }}
              style={{ color: "#000" }}
            />
          </span>
          <p>Free</p>
        </div>
        <div className="delivery-option-and-privacy-option-body-item">
          <p className="options">Fast Dellivery (3 days max) </p>
          <span>
            <Radio
              checked={deliveryOptionCharge === shippingOptions.express_delivery}
              onChange={() => { setDeliveryOptionCharge(shippingOptions.express_delivery) }}
              style={{ color: "#000" }}
            />
          </span>
          <p className="price">{shippingOptions.express_delivery}</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOption;
