import { createGlobalStyle } from 'styled-components';

import HeadingFont from '../Assets/Fonts/HeadingFont.ttf'; // Adjust path as needed

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'HeadingFont';
    src: url(${HeadingFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif; /* Default font for the rest of the app */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'HeadingFont', sans-serif; /* Apply custom font to headings */
  }
`;

export default GlobalStyles;
