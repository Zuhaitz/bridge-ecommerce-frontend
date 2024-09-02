const users = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
      };

    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };

    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload.user,
        orders: action.payload.orders,
      };

    default:
      return state;
  }
};

export default users;
