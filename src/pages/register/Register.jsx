import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

import "./Register.scss";

const Register = () => {
  const { register } = useContext(UserContext);

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await register(formData);

      clearState();
      navigate("/");
    } catch (error) {
      const { messages } = error.response.data;
      console.error(error.response);
      console.log(messages);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearState = () => {
    setFormData({ ...initialValue });
  };

  return (
    <section className="register">
      <div className="register__container">
        <h1 className="register__title">Create Account</h1>

        <form onSubmit={handleSubmit} className="register__form">
          <div className="register__field">
            {/* <label htmlFor="name">Username: </label> */}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="register__field">
            {/* <label htmlFor="email">Email: </label> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="register__field">
            {/* <label htmlFor="password">Password: </label> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <button type="submit" className="register__button">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
