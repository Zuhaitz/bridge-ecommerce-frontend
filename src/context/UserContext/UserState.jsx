import { useReducer } from "react";
import { createContext } from "react";

import UserReducer from "./UserReducer";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token || null,
  user: null,
};

const API_URL = "http://localhost:3000";

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const register = async (user) => {
    const res = await axios.post(`${API_URL}/users/`, user);

    dispatch({
      type: "REGISTER",
      payload: res.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(initialState);
