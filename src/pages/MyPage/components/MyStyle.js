import React from 'react';
import { styled } from 'styled-components';

function MyStyle() {
  return (
    <MyStyleContainer>
      <MyStyleTitle>내 스타일</MyStyleTitle>
    </MyStyleContainer>
  );
}

const MyStyleContainer = styled.div``;

const MyStyleTitle = styled.div`
  padding-bottom: 2rem;
  font-size: 2.6rem;
  font-weight: 500;
  border-bottom: 1px solid #222222;
`;

export default MyStyle;
