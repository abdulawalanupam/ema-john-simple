import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  const fixedNumberLength = (num) => {
    const fixed = num.toFixed(2);
    return Number(fixed);
  };

  // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const productArray = cart[i];
    total = total + productArray.price;
  }

  let shipping = 0;
  if (total > 55) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const productTotal = fixedNumberLength(total);
  const tax = fixedNumberLength(total / 10);
  const grandTotal = fixedNumberLength(total + shipping + tax);

  return (
    <div>
      <h3>Order Summary</h3>
      <p>Items Ordered: {cart.length}</p>
      {/* <p>Total Price: {totalPrice}</p> */}
      <p>Product Price: {productTotal}</p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>
        <small>Tax + VAT: {tax}</small>
      </p>
      <p>Total Price: {grandTotal}</p>
    </div>
  );
};

export default Cart;
