import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Login = () => {
  const { login } = useContext(UserContext);

  const initialValue = {
    name: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className="login">
      <div className="login__container">
        <h1 className="login__title">Login</h1>

        <form onSubmit={handleSubmit} className="login__form" noValidate>
          <div className="login__field">
            <div
              className={`login__input ${errors.name && "login__input--error"}`}
            >
              {/* <label htmlFor="name">Username or Email: </label> */}
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <p className="login__error">{errors.name}</p>
          </div>

          <div className="login__field">
            <div
              className={`login__input ${
                errors.password && "login__input--error"
              }`}
            >
              {/* <label htmlFor="password">Password: </label> */}
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <p className="login__error">{errors.password}</p>
          </div>

          <button type="submit" className="login__button">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
