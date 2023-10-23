import React from 'react';
import { keyframes, styled } from 'styled-components';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { SiKakao } from 'react-icons/si';

function UserModal() {
  const USER_FORM = {
    signUp: ['UserName', 'Email', 'Password', 'Repeat Password'],
    login: ['Email', 'Password'],
  };

  return (
    <UsersModalContainer>
      <WelcomeContainer>
        <WelcomeText>Welcome!</WelcomeText>
        <Logo>TRENDIK.</Logo>
        <CheckMember>
          Not a member yet? <Span>Register now</Span>
        </CheckMember>
      </WelcomeContainer>
      <InputContainer>
        <Title>LOG IN</Title>
        {USER_FORM.login.map((el, index) => {
          return (
            <InputWrap key={index}>
              <Label htmlFor={el}>• {el.toUpperCase()}</Label>
              <Input
                id={el}
                name={el}
                placeholder={el}
                autoComplete="off"
              ></Input>
            </InputWrap>
          );
        })}
        <CheckContainer>
          <CheckBox type="checkbox" />
          <CheckBoxContent>Save Email</CheckBoxContent>
        </CheckContainer>
        <SubmitButton>LOGIN</SubmitButton>
        <ForgotPassword>Forgot your password?</ForgotPassword>
        <SocialLoginTitle>Or sign in with</SocialLoginTitle>
        <SocialLoginContainer>
          <SocialLoginWrap>
            <KakaoIcon></KakaoIcon>
            <KakaoText>Kakao</KakaoText>
          </SocialLoginWrap>
          <SocialLoginWrap>
            <GoogleIcon></GoogleIcon>
            <GoogleText>Google</GoogleText>
          </SocialLoginWrap>
          <SocialLoginWrap>
            <FaceBookIcon></FaceBookIcon>
            <FaceBookText>Facebook</FaceBookText>
          </SocialLoginWrap>
        </SocialLoginContainer>
      </InputContainer>
    </UsersModalContainer>
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

const UsersModalContainer = styled.div`
  display: flex;
  position: absolute;
  width: 114rem;
  height: 65rem;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${opacityAnimation} 2s ease-in-out;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 5rem;
  background-color: #e9e9e9;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const WelcomeText = styled.div`
  font-size: 3.5rem;
`;

const Logo = styled.div`
  font-size: 6rem;
  font-weight: 600;
`;

const CheckMember = styled.div`
  font-size: 1.7rem;
  color: #2d2d2d;
`;

const Span = styled.span`
  color: #222222;
  font-weight: 700;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  flex: 1;
  padding: 5rem;
  background-color: #ffffff;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  overflow-y: scroll;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 5rem;
`;

const InputWrap = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  color: #b1b1b1;
  font-size: 1.2rem;
  font-weight: 200;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 3rem;
  border: none;
  border-bottom: 1px solid #e9e9e9;
  outline: none;
  background-color: transparent;
  caret-color: #222222;
  color: #222222;
  font-size: 1.7rem;
  transition: 1s;
  &::placeholder {
    color: #d3d3d3;
    font-size: 1.7rem;
  }
  &:focus {
    border-bottom: 1px solid #222222;
  }
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 4rem;
`;

const CheckBox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #8d8d8d;
  &:hover {
    cursor: pointer;
  }
`;

const CheckBoxContent = styled.div`
  color: #222222;
  font-size: 1.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 7.2rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: #222222;
  color: #ffffff;
  font-size: 1.9rem;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

const ForgotPassword = styled.div`
  width: 100%;
  margin-bottom: 6rem;
  color: #222222;
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: underline;
  text-align: right;
  &:hover {
    cursor: pointer;
  }
`;

const SocialLoginTitle = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
  font-weight: 300;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1;
  padding: 1.5rem;
  border: 1px solid #d3d3d3;
  border-radius: 1rem;
  transition: 1s;
  &:hover {
    cursor: pointer;
    border: 1px solid #222222;
  }
`;

const KakaoIcon = styled(SiKakao)`
  font-size: 3rem;
`;

const KakaoText = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;

const GoogleIcon = styled(BsGoogle)`
  font-size: 2rem;
`;

const GoogleText = styled(KakaoText)``;

const FaceBookIcon = styled(BsFacebook)`
  font-size: 2rem;
`;

const FaceBookText = styled(KakaoText)``;

export default UserModal;
