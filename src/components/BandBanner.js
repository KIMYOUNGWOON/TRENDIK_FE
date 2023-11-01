import React from 'react';
import { styled, keyframes } from 'styled-components';
import { AiFillThunderbolt } from 'react-icons/ai';

const text = 'NEW COMMUNITY - NOV . 28 . 2023';
const rollingText = new Array(5).fill(text);

function BandBanner() {
  return (
    <BandBannerContainer>
      <RollingContainer>
        {rollingText.map((text, index) => {
          return (
            <MoveContainer key={index}>
              <MoveText>{text}</MoveText>
              <MoveIcon />
            </MoveContainer>
          );
        })}
      </RollingContainer>
      <CopyRollingContainer>
        {rollingText.map((text, index) => {
          return (
            <MoveContainer key={index}>
              <MoveText>{text}</MoveText>
              <MoveIcon />
            </MoveContainer>
          );
        })}
      </CopyRollingContainer>
    </BandBannerContainer>
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

const BandBannerContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  background-color: #222222;
  overflow-x: hidden;
`;

const RollingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  background-color: #222222;
  animation: ${moveLeftLoop} 30s linear infinite;
  &:hover {
    cursor: pointer;
  }
`;

const CopyRollingContainer = styled(RollingContainer)``;

const MoveContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const MoveText = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
`;

const MoveIcon = styled(AiFillThunderbolt)`
  color: #ffffff;
  font-size: 2rem;
`;

export default BandBanner;
