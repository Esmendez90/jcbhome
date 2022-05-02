import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar/index";
import FooterComponent from "./components/Footer/index";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Strategy from "./pages/strategy";

function App() {
  return (
    <>
      <main>
        <Router>
          <Navigationbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/strategy" element={<Strategy />} />
          </Routes>
        </Router>
      </main>
      <FooterComponent/>
    </>
  );
}

export default App;
