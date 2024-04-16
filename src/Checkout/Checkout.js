import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";


function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <><img
    className="checkout_add"
    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/AAFeedback/Bruno/1500x300_Starts_Banner_v2._CB474351192_.gif"
    alt="banner"
  /> 
    <div className="checkout">    
      <div className="checkout_left">
        <h4>Hello's, {user?.email}</h4>
        <h2 className="checkout_tittle">Your Shoping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              tittle={item.tittle}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}
      </div>
      <div checkout_right>
        <Subtotal />
      </div>
    </div>
    </>
  );
}

export default Checkout;
