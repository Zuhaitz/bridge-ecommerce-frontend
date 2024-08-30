import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { UserProvider } from "./context/UserContext/UserState";

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
