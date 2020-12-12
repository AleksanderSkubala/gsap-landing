import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { TimelineMax, Power1, Power4 } from 'gsap';
import { gsap, CSSPlugin } from 'gsap/all';
gsap.registerPlugin(CSSPlugin);

const StyledWrraper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 0;

  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
  }

  ul li {
    cursor: pointer;
    text-align: center;
    letter-spacing: 2px;
    font-size: 12px;
    /* font-family: 'Playfair Display'; */
    padding: 5px 8px;

    @media (min-width: 425px) {
      font-size: 18px;
      padding: 10px 20px;
    }
  }
`;

const StyledContent = styled.div`
  font-size: 22px;
  text-align: center;

  h1 {
    font-size: 1.9em;
  }
`;

function HeroSection() {
  const content = useRef(null);
  const menu = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax();

    tl.staggerFrom(content.current.children, 1,
      {y: 80, opacity: 0, delay: 0.7, ease: Power1.easeOut},
      0.4,
    )
    .staggerFrom(menu.current.children, 1,
      {y: -100, opacity: 0, delay: -0.6, ease: Power4.easeOut},
      0.4,
    );
  }, []);

  return (
    <StyledWrraper>
      <StyledNav>
        <ul ref={menu}>
          <li>About us</li>
          <li>Our projects</li>
          <li>Contact us</li>
        </ul>
      </StyledNav>
      <StyledContent ref={content}>
        <h1>Design. Create. Deploy.</h1>
        <p>Make your ideas come true.</p>
      </StyledContent>
    </StyledWrraper>
  );
}

export default HeroSection;