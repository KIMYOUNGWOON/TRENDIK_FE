import { styled } from 'styled-components';

function SuccessModal({ modalType, setModalType, setIsProcessed, closeModal }) {
  const userName = localStorage.getItem('userName');
  return (
    <SuccessModalContainer>
      <WelcomeText>WELCOME!</WelcomeText>
      <Logo>TRENDIK.</Logo>
      <Emoticon
        src={
          modalType === 'login'
            ? 'https://user-images.githubusercontent.com/126956430/278058197-6d742c13-313c-4e33-aa12-57dee9a8f41b.png'
            : 'https://user-images.githubusercontent.com/126956430/278058189-4e58784e-b6ed-42bf-a721-beb8ee650a94.png'
        }
        alt="이모티콘"
      ></Emoticon>
      <SuccessText>
        {modalType === 'login'
          ? '로그인 되었습니다.'
          : '회원가입이 완료되었습니다.'}
      </SuccessText>
      {modalType === 'login' ? (
        <SubText>
          {userName}님 환영합니다. <br />
          트렌딕의 다양한 콘텐츠를 경험해보세요.
        </SubText>
      ) : (
        <SubText>
          트렌딕의 다양한 콘텐츠를 경험하실 수 있습니다. <br />
          회원가입 시 등록한 이메일로 로그인하세요.
        </SubText>
      )}

      <ButtonWrapper>
        <HomeButton
          onClick={() => {
            closeModal();
          }}
        >
          메인으로 이동
        </HomeButton>
        {modalType === 'signup' && (
          <LoginButton
            onClick={() => {
              setModalType('login');
              setIsProcessed((prev) => !prev);
            }}
          >
            로그인 하기
          </LoginButton>
        )}
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
