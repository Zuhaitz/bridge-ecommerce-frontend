import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import "./Cart.scss";

const Cart = () => {
  const { token } = useContext(UserContext);
  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);

  const createNewOrder = () => {
    if (!token) return;

    // We select only the ids for the API
    const listId = cart.map((item) => item.id);

    createOrder(listId);
    clearCart();
  };

  return (
    <section className="cart">
      {cart.length > 0 ? (
        <div className="cart__order">
          <h2 className="cart__title">Order list</h2>
          <div className="cart__items">
            {cart.map((cartItem) => (
              <div className="cart__item" key={cartItem.id}>
                <p className="cart__productName">{cartItem.name}</p>
                <p className="cart__productPrice">
                  {cartItem.price.toFixed(2)} €
                </p>
                <p className="cart__category">{cartItem.id}</p>
              </div>
            ))}
          </div>
          <div className="cart__bttns">
            <button
              onClick={() => clearCart()}
              className="cart__bttns__clearButton"
            >
              Clear cart
            </button>
            <button
              onClick={() => createNewOrder()}
              className="cart__bttns__createButton"
            >
              Create Order
            </button>
          </div>
        </div>
      ) : (
        <div className="cart__noProduct">No tienes ningún producto añadido</div>
      )}
    </section>
  );
};

export default Cart;
