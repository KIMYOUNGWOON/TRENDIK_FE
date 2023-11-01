import React from 'react';
import { styled } from 'styled-components';
import Nav from '../../components/Nav';
import MainBannerArea from './components/MainBannerArea';
import OutfitArea from './components/OutfitArea';

function Main() {
  return (
    <MainContainer>
      <MainBannerArea />
      <OutfitArea />
      <Nav />
    </MainContainer>
  );
}

const MainContainer = styled.main``;

export default Main;
