import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";

const Cart = () => {
  const { cart } = useContext(ProductContext);
  console.log(ProductContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // if (cart.length <= 0) {
  //   return <span>No tienes ningún producto añadido</span>;
  // }
  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });
  return <>{cartItem}</>;
};
export default Cart;
