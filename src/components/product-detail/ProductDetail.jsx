import { useContext } from "react";
import "./ProductDetail.scss";
import { ProductContext } from "../../context/ProductContext/ProductState";

const ProductDetail = ({ product }) => {
  const { name, description, price } = product;
  const { addCart } = useContext(ProductContext);
  console.log(product);
  return (
    <div className="product">
      <div className="product__image"></div>
      <div className="product__informationProduct">
        <div className="text">
          <p className="product__title">{name}</p>
          <p className="product__description">{description}</p>
        </div>

        <p className="product__price">{price}</p>
      </div>

      <button onClick={() => addCart(product)} className="product__addButton">
        Add Cart
      </button>
    </div>
  );
};
export default ProductDetail;
