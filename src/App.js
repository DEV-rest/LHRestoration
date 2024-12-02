import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import BrandLogo1 from './Assets/brands_logos/brand_logo_1.png';
import BrandLogo2 from './Assets/brands_logos/brand_logo_2.png';

// Array of brand logos
const brands = [
  { name: 'Home Depot', logo: HomeDepotLogo },
  { name: 'Best Buy', logo: BestBuyLogo },
  { name: 'Dollar General', logo: DollarGeneralLogo },
  { name: 'Chase Bank', logo: ChaseBankLogo },
  { name: 'Brand 1', logo: BrandLogo1 },
  { name: 'Brand 2', logo: BrandLogo2 },
];

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Brands brands={brands} />
      <Footer />
    </Router>
  );
};

export default App;
