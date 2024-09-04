import "./Order.scss";

const Order = ({ order }) => {
  const { id, Products, createdAt } = order;

  return (
    <div className="order">
      <p className="order__title">Order {id}</p>
      <p>{createdAt.substring(0, 10)}</p>

      {Products.map(({ id, name, price }) => {
        return (
          <div key={id}>
            <p>{name}</p>
            <p>{price}€</p>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
