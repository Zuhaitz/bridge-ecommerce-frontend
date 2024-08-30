import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/UserContext/UserState";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <section className="layout">
          <header className="header">
            <Navbar />
          </header>

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          <footer className="footer">
            <Footer />
          </footer>
        </section>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
