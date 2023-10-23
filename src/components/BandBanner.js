import React from 'react';
import { styled, keyframes } from 'styled-components';

function BandBanner() {
  return (
    <Container>
      <TextElement></TextElement>
    </Container>
  );
}

const moveLeftLoop = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  height: 5rem;
  margin-bottom: 1rem;
  background-color: #222222;
  overflow: hidden;
  white-space: nowrap;
`;

const TextElement = styled.div`
  display: inline-block;
  color: #ffffff;
  font-size: 2rem;
  animation: ${moveLeftLoop} 10s linear infinite;
`;

export default BandBanner;
