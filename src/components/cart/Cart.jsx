import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import "./Cart.scss";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  return (
    <section className="cart">
      {cart.length > 0 ? (
        <div className="cart__order">
          <div className="cart__items">
            {cart.map((cartItem) => (
              <div className="cart__item" key={cartItem.id}>
                <p>{cartItem.name}</p>
                <p>{cartItem.price.toFixed(2)} €</p>
                <p>{cartItem.id}</p>
              </div>
            ))}
          </div>
          <button onClick={() => clearCart()}>Clear cart</button>
          <button onClick={() => createNewOrder()}>Create Order</button>
        </div>
      ) : (
        <div>No tienes ningún producto añadido</div>
      )}
    </section>
  );
};

export default Cart;
