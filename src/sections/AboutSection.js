import React from 'react';
import styled from 'styled-components';

const StyledWrraper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding: 30px 60px;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  position: relative;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 40%;
    height: 40%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 20px;
    left: 20px;
    border: 1px solid black;
  }
`;

function AboutSection () {
  return (
    <StyledWrraper id="about">
      <StyledContent>
        <h1>Who are we?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis quo alias laboriosam enim quis.  Quibusdam minima optio deleniti qui vero eveniet fugiat magni esse.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis quo alias laboriosam enim quis.</p>
        <p>Itaque, debitis quo alias laboriosam enim quis.Quibusdam minima optio deleniti qui vero eveniet fugiat magni esse.</p>
      </StyledContent>
      <ImageWrapper>
        <StyledImage>
          <img alt="Who we are" src="https://source.unsplash.com/600x800/?mountain"/>
        </StyledImage>
      </ImageWrapper>
    </StyledWrraper>
  );
}

export default AboutSection;