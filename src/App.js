import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar/index";
import FooterComponent from "./components/Footer/index";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Sellers from "./pages/sellers";
import Team from "./pages/team";

function App() {
  return (
    <>
      <main>
        <img
          className="logoformated-img"
          src="/images/logo.png"
          alt="jcb logo formated"
        />
        <Router>
          <Navigationbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/seller-services" element={<Services />} />
            <Route path="/seller-plan-to-success" element={<Sellers />} />
            <Route path="/myteam" element={<Team />} />
          </Routes>
        </Router>
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
