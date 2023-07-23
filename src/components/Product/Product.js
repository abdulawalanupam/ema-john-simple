import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props.singleProduct.key);
  const { img, name, seller, price, stock, key } = props.singleProduct;

  return (
    <div className="product p-4">
      <div>
        <img src={img} alt="" />
      </div>

      <div>
        <h3>
          <Link to={"/product/" + key}>{name}</Link>
        </h3>
        <p>Brand: {seller}</p>
        <p className="p-price">${price}</p>
        <p>
          <small>Only {stock} left in stock - order soon</small>
        </p>
        <button onClick={() => props.handleAddProductBtn(props.singleProduct)}>
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
