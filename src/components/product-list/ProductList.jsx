import React from "react";
import ProductDetail from "../product-detail/ProductDetail";
import "./ProductList.scss";

const ProductList = ({ products }) => {
  return (
    <div className="list">
      {products &&
        products.map((product) => (
          <ProductDetail key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
