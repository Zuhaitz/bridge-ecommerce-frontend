import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  return (
    <section className="cart">
      {cart.length > 0 ? (
        <div className="cart__items">
          {cart.map((cartItem) => {
            return (
              <div className="cart__item" key={cartItem.id}>
                <p>{cartItem.name}</p>
                <p>{cartItem.price.toFixed(2)} €</p>
                <p>{cartItem.id}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No tienes ningún producto añadido</div>
      )}
    </section>
  );
};
export default Cart;
