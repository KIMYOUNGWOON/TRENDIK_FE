import React, { useState } from 'react';
import { styled } from 'styled-components';
import { VscSearch } from 'react-icons/vsc';

function Header() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <HeaderContainer>
      <LogoImage>TRENDIK.</LogoImage>
      <SearchBox isFocused={isFocused}>
        <LabelTag htmlFor="search">
          <SearchIcon />
        </LabelTag>
        <SearchInput
          id="search"
          type="text"
          placeholder="Search in Trendik"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autocomplete="off"
        />
      </SearchBox>
      <ButtonBox>
        <LogInButton>로그인</LogInButton>
        <SignUpButton>회원가입</SignUpButton>
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

const LogoImage = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  padding: 0 2rem;
  height: 4.8rem;
  border-radius: 1rem;
  background-color: ${({ isFocused }) => (isFocused ? '#323232' : '#d5d5d5')};
  transition: background-color 0.5s;
`;

const LabelTag = styled.label`
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
  &:hover {
    cursor: pointer;
    background-color: #d2d2d2;
    color: #222222;
    transition: background-color 0.5s, color 0.5s;
  }
`;

const SubmitButton = styled(MagazineButton)`
  border: 1px solid #222222;
  background-color: transparent;
  color: #222222;
  &:hover {
    background-color: #222222;
    color: #e3e3e3;
    transition: background-color 0.5s, color 0.5s;
  }
`;

export default Header;
