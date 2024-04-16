import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, image, tittle, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

      const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
      }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_tittle">{tittle}</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <p className="checkoutProduct_rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))
            }
        </p>
        <button onClick={removeFromBasket} >Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct; 
