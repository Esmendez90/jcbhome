import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar/index";
import FooterComponent from "./components/Footer/index";
import Home from "./pages/home";
import Journey from "./pages/journey";
import WhyKW from "./pages/whyKW";
import Services from "./pages/services";
import Plan from "./pages/plan";
import Team from "./pages/team";

function App() {
  return (
    <>
      <main>
        <Router>
          <Navigationbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/myjourney" element={<Journey />} />
            <Route path="/whykw" element={<WhyKW />} />
            <Route path="/seller-services" element={<Services />} />
            <Route path="/seller-plan-to-success" element={<Plan />} />
            <Route path="/myteam" element={<Team />} />
          </Routes>
        </Router>
      </main>
       <FooterComponent />
    </>
  );
}

export default App;
