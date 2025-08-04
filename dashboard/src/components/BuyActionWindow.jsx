import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { GeneralContext } from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, price }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(price ?? 0.0);

  useEffect(() => {
    setUnitPrice(price ?? 0.0);
  }, [price]);

  const totalCost = (quantity * unitPrice).toFixed(2);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: quantity,
      price: unitPrice,
      mode: "BUY",
    });

    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </fieldset>
          <fieldset>
            <legend>Price per unit</legend>
            <input
              type="number"
              name="unitPrice"
              id="unitPrice"
              step="0.05"
              value={unitPrice}
              onChange={(e) => setUnitPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{totalCost}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
