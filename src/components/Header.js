import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { VscSearch } from 'react-icons/vsc';
import BackGroundModal from './BackGroundModal';
import UserModal from './UserModal/UserModal';

function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [modalType, setModalType] = useState('login');
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const openModal = (type) => {
    document.body.style.overflowY = 'hidden';
    setIsOpened((prev) => !prev);
    setModalType(type);
  };

  const closeModal = () => {
    document.body.style.overflowY = 'scroll';
    setIsOpened((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    openModal('logout');
    navigate('/');
  };

  return (
    <HeaderContainer>
      {isOpened && <BackGroundModal closeModal={closeModal} />}
      {isOpened && (
        <UserModal
          modalType={modalType}
          setModalType={setModalType}
          closeModal={closeModal}
        />
      )}
      <Logo
        onClick={() => {
          navigate('/');
        }}
      >
        TRENDIK.
      </Logo>
      <SearchBox $focused={isFocused.toString()}>
        <Label htmlFor="search">
          <SearchIcon />
        </Label>
        <SearchInput
          id="search"
          type="text"
          placeholder="Search in Trendik"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete="off"
        />
      </SearchBox>
      <ButtonBox>
        {!token && (
          <LogInButton onClick={() => openModal('login')}>로그인</LogInButton>
        )}
        {!token && (
          <SignUpButton onClick={() => openModal('signup')}>
            회원가입
          </SignUpButton>
        )}
        {token && (
          <MyPageButton
            onClick={() => {
              navigate('/my');
            }}
          >
            마이페이지
          </MyPageButton>
        )}
        {token && <LogOutButton onClick={handleLogout}>로그아웃</LogOutButton>}
        <MagazineButton>Magazine</MagazineButton>
        <SubmitButton>Submit Look</SubmitButton>
      </ButtonBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 0 5rem;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #222222;
  &:hover {
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  padding: 0 2rem;
  height: 4.8rem;
  border-radius: 1rem;
  background-color: ${({ $focused }) =>
    $focused === 'true' ? '#323232' : '#d5d5d5'};
  transition: background-color 0.5s;
`;

const Label = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

const SearchIcon = styled(VscSearch)`
  font-size: 2rem;
  color: #989898;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 1.6rem;
  color: #989898;
  caret-color: #989898;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: 4rem;
`;

const MyPageButton = styled.div`
  font-size: 1.4rem;
  color: #222222;
  &:hover {
    cursor: pointer;
  }
`;

const LogOutButton = styled.div`
  font-size: 1.4rem;
  color: #222222;
  &:hover {
    cursor: pointer;
  }
`;

const LogInButton = styled.div`
  font-size: 1.4rem;
  &:hover {
    cursor: pointer;
  }
`;

const SignUpButton = styled(LogInButton)``;

const MagazineButton = styled.div`
  height: 4.8rem;
  padding: 1.3rem 2rem 0;
  border-radius: 1rem;
  background-color: #222222;
  color: #e3e3e3;
  font-size: 1.6rem;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #d5d5d5;
    color: #777777;
  }
`;

const SubmitButton = styled(MagazineButton)`
  border: 1px solid #222222;
  background-color: transparent;
  color: #222222;
  &:hover {
    background-color: #222222;
    color: #e3e3e3;
  }
`;

export default Header;
