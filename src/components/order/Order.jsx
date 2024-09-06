import "./Order.scss";

const Order = ({ order }) => {
  const { id, Products, createdAt } = order;

  return (
    <div className="order">
      <p className="order__title">Order {id}</p>
      <p className="order__date">{createdAt.substring(0, 10)}</p>

      <div className="order__products">
        {Products.map(({ id, name, price }) => {
          return (
            <div key={id} className="order__product">
              <p>{name}</p>
              <p>{price}€</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
