import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
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
        <HashRouter>
          <Navigationbar />
          <Routes>
            <Route path="/jcbhome" exact element={<Home />} />
            <Route path="/jcbhome/myjourney" element={<Journey />} />
            <Route path="/jcbhome/whykw" element={<WhyKW />} />
            <Route path="/jcbhome/seller-services" element={<Services />} />
            <Route path="/jcbhome/seller-plan-to-success" element={<Plan />} />
            <Route path="/jcbhome/myteam" element={<Team />} />
          </Routes>
          </HashRouter>
      </main>
       <FooterComponent />
    </>
  );
}

export default App;
