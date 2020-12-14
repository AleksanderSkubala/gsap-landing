import React from 'react';
import styled from 'styled-components';

const StyledWrraper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 426px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding: 30px 60px;
  }
`;

const StyledContent = styled.div`
  text-align: justify;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

function AboutSection () {
  return (
    <StyledWrraper id="about">
      <StyledContent>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis quo alias laboriosam enim quis. Quibusdam minima optio deleniti qui vero eveniet fugiat magni esse.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis quo alias laboriosam enim quis.</p>
        <p>Itaque, debitis quo alias laboriosam enim quis.Quibusdam minima optio deleniti qui vero eveniet fugiat magni esse.</p>
      </StyledContent>
      <StyledImage src="https://source.unsplash.com/600x800/?mountain"/>
    </StyledWrraper>
  );
}

export default AboutSection;