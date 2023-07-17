import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  console.log(props.singleProduct);
  const { img, name, seller, price, stock } = props.singleProduct;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>

      <div>
        <h3>{name}</h3>
        <p>Brand: {seller}</p>
        <p className="p-price">${price}</p>
        <p>
          <small>Only {stock} left in stock - order soon</small>
        </p>
        <button>
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
