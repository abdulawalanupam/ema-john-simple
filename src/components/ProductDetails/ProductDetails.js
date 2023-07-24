import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";

const ProductDetails = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.Key === productKey);
  console.log(product);
  
  return (
    <div>
      <h1>{productKey}This page is product details page.</h1>
    </div>
  );
};

export default ProductDetails;
