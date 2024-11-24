import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Assets/logo.png';

// Styled components
const NavbarContainer = styled.nav`
  background-color: f2f3f5; /* Darker blue from the logo */
  padding: 3px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 70px; /* Adjust height for a better fit */
  margin-right: 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 50px; /* Responsive adjustment for smaller screens */
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px; /* Adjust spacing for smaller screens */
  }
`;

const NavItem = styled(Link)`
  color: #004488; /* Orange from the logo */
  text-decoration: none;
  font-size: 1.6rem; /* Slightly larger font for better readability */
  font-weight: bold;
  transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;

  &:hover {
    color: #a63c06; /* Darker orange for hover */
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <NavLinks>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
