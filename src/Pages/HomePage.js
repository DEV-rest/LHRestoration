import React from 'react';
import styled from 'styled-components';
import coverImage from '../Assets/cover-image.png';
import SketchfabEmbed from "../Components/Sketchfab/SketchfabEmbed";

// Styled Components
const CoverSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  height: 45vh;
  background-color: #5a8293; /* Off-white background */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;

  img {
    max-width: 80%;
    height: auto;
    padding-right: 200px;
    
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;

  h1 {
    font-size: 2.5rem;
    color:  #ffa500; /* Navy blue for heading */
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: white;
    margin-bottom: 30px;
  }

  button {
    background-color: #a63c06; /* Brown button (logo color) */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #004488; /* Hover color: blue */
    }
  }
`;

const HomePage = () => {
  return (
    <><CoverSection>
      <ContentContainer>
        <h1>Welcome to Longhorn Restoration</h1>
        <p>
          We provide expert restoration services with a commitment to quality and care. Let us bring your projects to life with precision and passion.
        </p>
        <button>Learn More</button>
      </ContentContainer>
      <ImageContainer>
        <img src={coverImage} alt="Cover" />
      </ImageContainer>
    </CoverSection></>
  );
};

export default HomePage;
