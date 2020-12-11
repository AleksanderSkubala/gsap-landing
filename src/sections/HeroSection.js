import React from 'react';
import styled from 'styled-components';

const StyledWrraper = styled.section`
  width: 100%;
  height: 100vh;
`;

function HeroSection() {
  return (
    <StyledWrraper>
      <h1>Design. Create. Deploy.</h1>
      <p>Make your ideas come truth.</p>
    </StyledWrraper>
  );
}

export default HeroSection;