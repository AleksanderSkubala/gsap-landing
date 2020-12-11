import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { TimelineMax, Power4 } from 'gsap'

const StyledWrraper = styled.section`
  width: 100%;
  height: 100vh;
  font-size: 18px;
`;

function HeroSection() {
  const content = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax();

    tl.staggerFrom(content.current.children, 1.5,
      {y: 80, opacity: 0, ease: Power4.easeOut},
      0.2,
    );
  }, []);

  return (
    <StyledWrraper>
      <div className="content" ref={content}>
        <h1>Design. Create. Deploy.</h1>
        <p>Make your ideas come truth.</p>
      </div>
    </StyledWrraper>
  );
}

export default HeroSection;