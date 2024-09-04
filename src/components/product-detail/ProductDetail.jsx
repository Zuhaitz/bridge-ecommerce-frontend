import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";

const ProductDetail = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
    console.log("me");
  }, []);

  return (
    products &&
    products.map((product) => (
      <div className="product" key={product._id}>
        <h2>{product.title}</h2>
      </div>
    ))
  );
};
export default ProductDetail;
