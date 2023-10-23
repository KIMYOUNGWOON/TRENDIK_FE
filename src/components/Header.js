import React, { useState } from 'react';
import { styled } from 'styled-components';
import { VscSearch } from 'react-icons/vsc';
import BackGroundModal from './BackGroundModal';
import UserModal from './UserModal';

function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setIsOpened((prev) => !prev);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setIsOpened((prev) => !prev);
  };

  return (
    <HeaderContainer>
      {isOpened && <BackGroundModal closeModal={closeModal} />}
      {isOpened && <UserModal />}
      <Logo>TRENDIK.</Logo>
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
        <LogInButton onClick={openModal}>LOG IN</LogInButton>
        <SignUpButton>SIGN UP</SignUpButton>
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
