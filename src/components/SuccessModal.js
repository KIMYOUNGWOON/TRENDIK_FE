import { styled } from 'styled-components';

function SuccessModal() {
  return (
    <SuccessModalContainer>
      <WelcomeText>WELCOME!</WelcomeText>
      <Logo>TRENDIK.</Logo>
      <Emoticon
        src="https://user-images.githubusercontent.com/126956430/278058197-6d742c13-313c-4e33-aa12-57dee9a8f41b.png"
        alt="이모티콘"
      ></Emoticon>
      <SuccessText>회원가입이 완료되었습니다.</SuccessText>
      <SubText>
        트렌딕의 다양한 콘텐츠를 경험하실 수 있습니다. <br />
        회원가입 시 등록한 이메일로 로그인하세요.
      </SubText>
      <ButtonWrapper>
        <HomeButton>메인으로 이동</HomeButton>
        <LoginButton>로그인 하기</LoginButton>
      </ButtonWrapper>
    </SuccessModalContainer>
  );
}

const SuccessModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  width: 50rem;
  height: 60rem;
  padding: 5rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 5px 6px 15px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 6px 15px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 6px 15px -4px rgba(0, 0, 0, 0.75);
`;

const WelcomeText = styled.div`
  font-size: 3.5rem;
`;

const Logo = styled.div`
  flex: 1;
  font-size: 6rem;
  font-weight: 500;
`;

const Emoticon = styled.img`
  flex: 1;
  width: 12rem;
`;

const SuccessText = styled.div`
  flex: 1;
  font-size: 2.5rem;
`;

const SubText = styled.div`
  flex: 2;
  font-size: 1.3rem;
  color: #222222;
  line-height: 2rem;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

const HomeButton = styled.button`
  flex: 1;
  padding: 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: #e9e9e9;
  color: #757575;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

const LoginButton = styled(HomeButton)`
  background-color: #222222;
  color: #ffffff;
`;

export default SuccessModal;
