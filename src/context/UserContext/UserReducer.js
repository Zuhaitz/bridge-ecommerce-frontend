const users = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default users;
