import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

const Admin = () => {
  const { token, user, getUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
    getUserInfo();
  }, []);

  useEffect(() => {
    if (user && user.role !== "admin") navigate("/");
  }, [user]);

  return (
    <div>{user && user.role === "admin" ? <>Me</> : <p>Loading...</p>}</div>
  );
};

export default Admin;
