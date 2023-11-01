import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
  return (
    <NotFoundContainer>
      <Emoticon src="https://user-images.githubusercontent.com/126956430/278058197-6d742c13-313c-4e33-aa12-57dee9a8f41b.png" />
      <NotFoundTitle>404 - Not Found</NotFoundTitle>
      <NotFoundMessage>
        The page you are looking for does not exist.
      </NotFoundMessage>
      <HomeLink to="/">Go to Home →</HomeLink>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  background-color: #f5f5f5;
`;

const Emoticon = styled.img`
  width: 15rem;
`;

const NotFoundTitle = styled.h2`
  font-size: 3.5rem;
  color: #333;
`;

const NotFoundMessage = styled.p`
  font-size: 2rem;
  color: #555;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: #007bff;
  &:hover {
    cursor: pointer;
  }
`;

export default NotFound;
