import React from 'react';
import { useState, useReducer } from 'react';
import { styled, keyframes } from 'styled-components';
import slideReducer from '../../../reducer/slideReducer';
import AUTO_SLIDE from '../../../data/autoSlide';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

function OutfitArea() {
  const [animate, setAnimate] = useState(true);
  const [slideList, dispatch] = useReducer(slideReducer, AUTO_SLIDE);

  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <OutfitContainer id="OOTD">
      <OutfitTitleWrapper>
        <OutfitTitle src="https://user-images.githubusercontent.com/126956430/278880346-739fc1cf-c40c-4fa7-b58f-edd5097165ce.png" />
        <OutfitMark>#OOTD</OutfitMark>
      </OutfitTitleWrapper>
      <GoToStyleButton>STYLE MORE →</GoToStyleButton>
      <AutoSlideContainer>
        <SlideItemWrapper
          onMouseEnter={onStop}
          onMouseLeave={onRun}
          $animate={animate.toString()}
        >
          {slideList.map((item) => {
            return (
              <SlideItem key={item.id} $image={item.image}>
                <Background />
                <InfoContainer>
                  <ProfileImg />
                  <Nickname>{item.nickName}</Nickname>
                  <LikeButtonBox>
                    {item.isLiked ? (
                      <FillLikeButton
                        onClick={() => {
                          dispatch({
                            type: 'LIKE_CANCEL',
                            payload: { id: item.id },
                          });
                        }}
                      />
                    ) : (
                      <EmptyLikeButton
                        onClick={() => {
                          dispatch({ type: 'LIKE', payload: { id: item.id } });
                        }}
                      />
                    )}
                  </LikeButtonBox>
                </InfoContainer>
              </SlideItem>
            );
          })}
        </SlideItemWrapper>
        <CopySlideItemWrapper
          onMouseEnter={onStop}
          onMouseLeave={onRun}
          $animate={animate.toString()}
        >
          {slideList.map((item) => {
            return (
              <SlideItem key={item.id} $image={item.image}>
                <Background />
                <InfoContainer>
                  <ProfileImg />
                  <Nickname>{item.nickName}</Nickname>
                  <LikeButtonBox>
                    {item.isLiked ? (
                      <FillLikeButton
                        onClick={() => {
                          dispatch({ type: 'DISLIKE', payload: item.id });
                        }}
                      />
                    ) : (
                      <EmptyLikeButton
                        onClick={() => {
                          dispatch({ type: 'LIKE', payload: item.id });
                        }}
                      />
                    )}
                  </LikeButtonBox>
                </InfoContainer>
              </SlideItem>
            );
          })}
        </CopySlideItemWrapper>
      </AutoSlideContainer>
    </OutfitContainer>
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

const OutfitContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 12rem 0;
  background-color: #ffffff;
  text-align: center;
`;

const OutfitTitleWrapper = styled.div`
  position: relative;
`;

const OutfitTitle = styled.img`
  width: 32%;
  height: auto;
`;

const OutfitMark = styled.div`
  position: absolute;
  top: 90%;
  right: 33%;
  width: 13rem;
  height: 5rem;
  padding-top: 1.5rem;
  background-color: #fdd11b;
  border-radius: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  transform: rotate(-10deg);
`;

const GoToStyleButton = styled.div`
  width: 20rem;
  margin: 8rem auto 6rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #222222;
  color: #ffffff;
  font-size: 1.6rem;
  transition: 0.5s;
  letter-spacing: 0.1rem;
  &:hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;

const AutoSlideContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

const SlideItemWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  flex-wrap: nowrap;
  padding: 0 1.5rem;
  gap: 3rem;
  overflow-x: hidden;
  animation: ${moveLeftLoop} 40s linear infinite;
  animation-play-state: ${({ $animate }) =>
    $animate === 'true' ? 'running' : 'paused'};
`;

const CopySlideItemWrapper = styled(SlideItemWrapper)``;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 2rem;
  transition: 0.5s;
`;

const SlideItem = styled.li`
  position: relative;
  flex-shrink: 0;
  width: 27.3rem;
  height: 34rem;
  border-radius: 2rem;
  background-image: ${({ $image }) => `url(${$image})`};
  background-position: center;
  background-size: cover;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(0.96);
    background-color: #7c7c7c;
    ${Background} {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
`;

const Nickname = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 300;
`;

const ProfileImg = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #e9e9e9;
  border-radius: 50%;
`;

const LikeButtonBox = styled.div`
  flex: 1;
  text-align: right;
`;

const EmptyLikeButton = styled(AiOutlineHeart)`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 300;
`;

const FillLikeButton = styled(AiFillHeart)`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 300;
`;

export default OutfitArea;
