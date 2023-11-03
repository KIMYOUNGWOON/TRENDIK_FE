import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import LoginInfo from './components/LoginInfo';
import MyStyle from './components/MyStyle';
import ProfileManagement from './components/ProfileManagement';

const NAV_LISTS = [
  { id: 1, name: '프로필 관리' },
  { id: 2, name: '로그인 정보' },
  { id: 3, name: '내 스타일' },
];

function MyPage() {
  const [currentId, setCurrentId] = useState(1);

  function handleClick(targetId) {
    setCurrentId(targetId);
  }
  return (
    <MyPageContainer>
      <NavContainer>
        <NavTitle>마이 페이지</NavTitle>
        {NAV_LISTS.map((list) => {
          return (
            <NavList
              $isClicked={(currentId === list.id).toString()}
              key={list.id}
              onClick={() => {
                handleClick(list.id);
              }}
            >
              {list.name}
            </NavList>
          );
        })}
      </NavContainer>
      <ContentContainer>
        {currentId === 1 && <ProfileManagement />}
        {currentId === 2 && <LoginInfo />}
        {currentId === 3 && <MyStyle />}
      </ContentContainer>
    </MyPageContainer>
  );
}

const MyPageContainer = styled.div`
  display: flex;
  gap: 10rem;
  padding: 5rem;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

const NavTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 2.6rem;
  font-weight: 500;
`;

const NavList = styled.div`
  font-size: 1.6rem;
  color: ${({ $isClicked }) => ($isClicked === 'true' ? '#222222' : '#6c6c6c')};
  font-weight: ${({ $isClicked }) => ($isClicked === 'true' ? 700 : 400)};
  &:hover {
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  flex: 1 auto;
`;

export default MyPage;
