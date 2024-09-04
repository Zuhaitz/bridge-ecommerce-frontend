import { useReducer } from "react";
import { createContext } from "react";

import UserReducer from "./UserReducer";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token || null,
  user: null,
  orders: [],
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

  const login = async (user) => {
    const res = await axios.post(`${API_URL}/users/login`, user);

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const res = await axios.delete(`${API_URL}/users/logout`, {
      headers: {
        authorization: token,
      },
    });

    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });

    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  const getUserInfo = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.get(`${API_URL}/users/`, {
        headers: {
          authorization: token,
        },
      });

      dispatch({
        type: "GET_USER_INFO",
        payload: res.data,
      });

      // return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        orders: state.orders,
        register,
        login,
        logout,
        getUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(initialState);
