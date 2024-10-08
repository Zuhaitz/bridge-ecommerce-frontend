const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.product,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "ADD_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };

    default:
      return state;
  }
};
export default products;
