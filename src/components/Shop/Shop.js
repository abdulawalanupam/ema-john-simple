import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProductBtn = (productCartBtn) => {
    const newCart = [...cart, productCartBtn];
    setCart(newCart);
    addToDatabaseCart(products.key, 1);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((singleProductData) => (
          <Product
            handleAddProductBtn={handleAddProductBtn}
            singleProduct={singleProductData}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
