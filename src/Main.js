import React from 'react';
import { styled } from 'styled-components';
import Header from './components/Header';
function Main() {
  return (
    <>
      <BandBanner />
      <Header />
    </>
  );
}

const BandBanner = styled.div`
  margin-bottom: 1rem;
  height: 5rem;
  background-color: #222222;
`;

export default Main;
