import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  // Conditional classes
  .dark-mode {
      background: rgba(0,0,0,0.9);
      z-index: 0;
  }

  .dark-mode-font {
      color: white;
      font-weight: 100 !important;
  }

  .enable-blur >* {
   filter: blur(3px);
  }

  .enable-cursor {
    cursor: pointer;
  }

  .mt-1{
      margin-top: 1rem;
  }
  
  // Media Queries

  html {
      @media (max-width: 1700px) {
          font-size: 75%;
      }
  }
`;

export default GlobalStyle;
