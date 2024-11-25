import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Assets/logo.png';

// Styled components
const NavbarContainer = styled.nav`
  background-color: #f2f3f5; /* Light gray background */
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100%; /* Full width to align logo, brand name, and button */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between logo and brand name */
`;

const Logo = styled.img`
  height: 120px; /* Adjust height for a better fit */
  width: auto;
  padding-right:10px;
  padding-left: 180px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 60px; /* Responsive adjustment for smaller screens */
  }
`;

const BrandName = styled.h1`
  font-family: 'HeadingFont', sans-serif; /* Custom font */
  font-size: 2rem; /* Adjust as needed */
  color: #004488; /* Brand color */
  margin: 0; /* Remove default margin */
`;

const EmergencyButton = styled.a`
  background-color: #ff4d4d; /* Red button for emergency */
  color: #ffffff; /* White text for contrast */
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d43b3b; /* Darker red on hover */
  }
`;

const NavBarContents = styled.div`
  background-color: #5a8293; /* Dark blue for navbar look */
  padding: 10px 20px;
  width: 100%; /* Full width for bar-like appearance */
  display: flex;
  justify-content: center; /* Center navigation links */
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
  color: #ffffff; /* White text for contrast */
  text-decoration: none;
  font-size: 1.6rem; 
  font-weight: bold;
  transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;

  &:hover {
    color: #ffa500; /* Highlight on hover */
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <TopBar>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
          <BrandName>Longhorn 
          <br/>Restoration</BrandName>
        </LogoContainer>
        <EmergencyButton href="tel:+1234567890">Emergency Call: (123) 456-7890</EmergencyButton>
      </TopBar>
      <NavBarContents>
        <NavLinks>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </NavLinks>
      </NavBarContents>
    </NavbarContainer>
  );
};

export default Navbar;
