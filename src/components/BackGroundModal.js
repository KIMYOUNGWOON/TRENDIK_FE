import React from 'react';
import { keyframes, styled } from 'styled-components';

function BackGroundModal({ isOpened, closeModal }) {
  return (
    <Container onClick={closeModal}>
      <CloseButton>✕</CloseButton>
    </Container>
  );
}

const opacityAnimation = keyframes`
  from {
    opacity : 0
  }
  to {
    opacity : 1
  }
`;

const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${opacityAnimation} 1s;
  z-index: 1;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 3rem;
  right: 5rem;
  width: 6rem;
  height: 6rem;
  padding-bottom: 0.5rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 2.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export default BackGroundModal;
