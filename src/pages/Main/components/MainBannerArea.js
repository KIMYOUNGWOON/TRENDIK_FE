import React from 'react';
import { styled } from 'styled-components';

function MainBannerArea() {
  return (
    <MainBannerContainer>
      <SloganImage
        src="https://user-images.githubusercontent.com/126956430/278879259-c2af9fee-94d1-480f-8d77-3a32a9b99230.png"
        alt="slogan"
      />
      <MainBannerWrapper>
        <MainBanner
          src="https://user-images.githubusercontent.com/126956430/278855467-915e915f-7901-49bf-9d74-30dc956b2b15.png"
          alt="banner image"
        />
        <ButtonWrapper>
          <MenButton>MEN</MenButton>
          <WomenButton>WOMEN</WomenButton>
        </ButtonWrapper>
      </MainBannerWrapper>
    </MainBannerContainer>
  );
}

const MainBannerContainer = styled.main`
  padding: 7rem 5rem;
`;

const SloganImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 3rem;
`;

const MainBannerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MainBanner = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  border-radius: 1.5rem;
`;

const MenButton = styled.div`
  padding: 2rem 2.5rem;
  border: 1px solid #ffffff;
  border-radius: 1rem;
  color: #ffffff;
  font-size: 1.8em;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const WomenButton = styled(MenButton)``;
export default MainBannerArea;
