import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/UserContext/UserState";
import { ProductProvider } from "./context/ProductContext/ProductState";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Catalog from "./pages/catalog/Catalog";

function App() {
  return (
    <UserProvider>
      <ProductProvider>
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
                <Route path="/catalog" element={<Catalog />} />
              </Routes>
            </main>

            <footer className="footer">
              <Footer />
            </footer>
          </section>
        </BrowserRouter>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
