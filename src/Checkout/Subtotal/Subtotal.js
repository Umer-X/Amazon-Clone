import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useNavigate} from "react-router-dom"


function Subtotal() {
   const history = useNavigate();
   const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>
            SubTotal ({basket.length} Items) : <strong>{value}</strong>
        </p>
        <small className='subtotal_gift'>
            <input type='checkbox' /> This order-contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandsSeparator={true}
      prefix={"$"}
       />
       <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal