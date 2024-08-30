const users = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export default users;
