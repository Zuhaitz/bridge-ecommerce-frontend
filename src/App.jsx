import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/UserContext/UserState";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Catalog from "./pages/catalog/Catalog";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <OrdersProvider>
          <BrowserRouter>
            <section className="layout">
              <header className="header">
                <Navbar />
              </header>

              <main className="main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </main>

              <footer className="footer">
                <Footer />
              </footer>
            </section>
          </BrowserRouter>
        </OrdersProvider>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
