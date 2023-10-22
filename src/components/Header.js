import React from 'react';
import { styled } from 'styled-components';
import { VscSearch } from 'react-icons/vsc';

function Header() {
  return (
    <HeaderContainer>
      <LogoImage>TRENDIK.</LogoImage>
      <SearchBox>
        <SearchIcon />
        <SearchInput placeholder="Search in Trendik" />
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

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
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
  height: 4.8rem;
  border-radius: 10px;
  background-color: #d5d5d5;
`;

const SearchIcon = styled(VscSearch)`
  font-size: 2rem;
  color: #989898;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const LogInButton = styled.div`
  height: 2rem;
`;

const SignUpButton = styled.div`
  height: 2rem;
`;

const MagazineButton = styled.div`
  height: 4.8rem;
  border-radius: 10px;
  background-color: #222222;
`;

const SubmitButton = styled.div`
  height: 4.8rem;
`;

export default Header;
