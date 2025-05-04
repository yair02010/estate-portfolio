import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BarkanLocation from "./pages/locations/BarkanLocation.jsx";
import OranitLocation from "./pages/locations/OranitLocation.jsx";
import ArielLocation from "./pages/locations/ArielLocation.jsx";
import BeitelLocation from "./pages/locations/BeitelLocation.jsx";
import Location from "./pages/locations/Location.jsx";
import JerusalemLocation from "./pages/locations/JerusalemLocation";
import ScrollToTop from "./components/ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const location = useLocation(); 
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/barkan" element={<BarkanLocation />} />
          <Route path="/locations/oranit" element={<OranitLocation />} />
          <Route path="/locations/beitel" element={<BeitelLocation />} />
          <Route path="/locations/ariel" element={<ArielLocation />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/locations/jerusalem" element={<JerusalemLocation />} />
        </Routes>
      </main>
      {!isHomePage && <Footer />}
    </>
  );
}
