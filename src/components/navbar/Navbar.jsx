import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

import "./Navbar.scss";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar">
      <a href="/" className="navbar__title">
        <p>Store</p>
      </a>

      <div className="navbar__links">
        <a href="/" className="navbar__link">
          <p>Home</p>
        </a>
        <a href="#" className="navbar__link">
          <p>Catalog</p>
        </a>
        {token ? (
          <>
            <a href="/profile" className="navbar__link">
              <p>Profile</p>
            </a>

            <a onClick={logout} className="navbar__link">
              <p>Sign Out</p>
            </a>
          </>
        ) : (
          <>
            <a href="/register" className="navbar__link">
              <p>Sign Up</p>
            </a>
            <a href="/login" className="navbar__link">
              <p>Login</p>
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
