import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeroSection from './sections/HeroSection.js';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    overflow-x: hidden;

    font-family: 'Montserrat', 'Playfair Display', sans-serif;
    font-size: 16px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', sans-serif;
  }

  h1 {
    font-size: 1.9rem;
  }

  h2 {
    font-size: 1.4rem;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <PageWrapper>
        <HeroSection></HeroSection>
      </PageWrapper>
    </>
  );
}

export default App;
