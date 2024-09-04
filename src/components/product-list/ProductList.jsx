import React from "react";
import ProductDetail from "../product-detail/ProductDetail";

const ProductList = ({ products }) => {
  return (
    <div>
      {products &&
        products.map((product) => (
          <ProductDetail key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
