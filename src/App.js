import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Footer from "./Components/Footer";
import Brands from './Components/Brands';

// Import brand logos from the new path within the src directory
import HomeDepotLogo from './Assets/brands_logos/home_depot_logo.png';
import BestBuyLogo from './Assets/brands_logos/best_buy_logo.png';
import DollarGeneralLogo from './Assets/brands_logos/dollar_general_logo.png';
import ChaseBankLogo from './Assets/brands_logos/chase_bank_logo.jpg';
import Concentra from './Assets/brands_logos/concentra_logo.png';
import Kohls from './Assets/brands_logos/kohls_logo.png';
import TractorSupply from './Assets/brands_logos/tractorsupply_logo.png';
import AspenDental from './Assets/brands_logos/aspen_dental_logo.png';

// Array of brand logos
const brands = [
  { name: 'Home Depot', logo: HomeDepotLogo },
  { name: 'Best Buy', logo: BestBuyLogo },
  { name: 'Dollar General', logo: DollarGeneralLogo },
  { name: 'Chase Bank', logo: ChaseBankLogo },
  { name: 'Concentra', logo: Concentra },
  { name: 'Kohls', logo: Kohls },
  { name: 'Tractor Supply', logo: TractorSupply },
  { name: 'Aspen Dental', logo: AspenDental },
];

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Render Brands only on specific routes */}
      {(location.pathname === '/' || location.pathname === '/services') && <Brands brands={brands} />}
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
