const ProductDetail = ({ product }) => {
  const { name, description, price } = product;
  return (
    <div className="product">
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};
export default ProductDetail;
