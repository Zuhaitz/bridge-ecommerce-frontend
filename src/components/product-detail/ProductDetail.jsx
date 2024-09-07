import "./ProductDetail.scss";

const ProductDetail = ({ product }) => {
  const { name, description, price } = product;
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

      <button className="product__addButton">BUY</button>
    </div>
  );
};
export default ProductDetail;
