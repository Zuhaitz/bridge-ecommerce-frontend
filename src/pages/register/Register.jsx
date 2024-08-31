import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

import "./Register.scss";

// Ref: https://stackoverflow.com/questions/5658899/can-anyone-tell-me-the-regex-for-excluding-numbers-and-special-characters-in-asp
const regexText = /^[a-zA-Z]*$/;
// Ref: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const regexEmail = /^\S+@\S+\.\S+$/;
// Ref: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Register = () => {
  const { register } = useContext(UserContext);

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errorList = {};

    const { name, email, password } = formData;

    if (name.length < 3 || !regexText.test(name))
      errorList.name =
        name.length < 3
          ? "Name must be longer than 2 characters."
          : "Name must not contain numbers or special characters.";

    if (!regexEmail.test(email)) errorList.email = "Introduce a valide email.";

    if (!regexPassword.test(password))
      errorList.password =
        "Password must be 8 digits long, and contain 1 number or letter.";

    return errorList;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errorList = validateForm();

    if (Object.keys(errorList).length > 0) return setErrors(errorList);

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
    setErrors({});
  };

  return (
    <section className="register">
      <div className="register__container">
        <h1 className="register__title">Create Account</h1>

        <form onSubmit={handleSubmit} className="register__form" noValidate>
          <div className="register__field">
            <div
              className={`register__input ${
                errors.name && "register__input--error"
              }`}
            >
              {/* <label htmlFor="name">Username: </label> */}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                maxLength={20}
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <p className="register__error">{errors.name}</p>
          </div>

          <div className="register__field">
            <div
              className={`register__input ${
                errors.email && "register__input--error"
              }`}
            >
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
            <p className="register__error">{errors.email}</p>
          </div>

          <div className="register__field">
            <div
              className={`register__input ${
                errors.password && "register__input--error"
              }`}
            >
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
            <p className="register__error">{errors.password}</p>
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
