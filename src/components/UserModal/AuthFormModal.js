import { useRef } from 'react';
import { styled } from 'styled-components';
import SignUp from './SignUp';
import Login from './Login';
import SocialLogin from './SocialLogin';

function AuthFormModal({ modalType, setModalType, setIsProcessed }) {
  const scrollRef = useRef();
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <AuthFormModalContainer>
      <LeftContainer>
        <WelcomeText>
          WELCOME
          <br />
          BACK!
        </WelcomeText>
        <Wrapper>
          <Logo>TRENDIK.</Logo>
          <Emoticon
            src={
              modalType === 'login'
                ? 'https://user-images.githubusercontent.com/126956430/278058197-6d742c13-313c-4e33-aa12-57dee9a8f41b.png'
                : 'https://user-images.githubusercontent.com/126956430/278058189-4e58784e-b6ed-42bf-a721-beb8ee650a94.png'
            }
          ></Emoticon>
        </Wrapper>
        {modalType === 'login' ? (
          <CheckMember>
            Not a member yet?{' '}
            <Span
              onClick={() => {
                setModalType('signup');
                scrollToTop();
              }}
            >
              Sign Up Now
            </Span>
          </CheckMember>
        ) : (
          <CheckMember>
            Are you a member?{' '}
            <Span
              onClick={() => {
                setModalType('login');
                scrollToTop();
              }}
            >
              Login Now
            </Span>
          </CheckMember>
        )}
      </LeftContainer>
      <RightContainer ref={scrollRef}>
        {modalType === 'login' ? (
          <Login setIsProcessed={setIsProcessed} />
        ) : (
          <SignUp setIsProcessed={setIsProcessed} scrollToTop={scrollToTop} />
        )}
        <SocialLogin />
      </RightContainer>
    </AuthFormModalContainer>
  );
}

const AuthFormModalContainer = styled.div`
  display: flex;
  position: absolute;
  width: 114rem;
  height: 65rem;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 5rem;
  background-color: #e9e9e9;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
`;

const WelcomeText = styled.div`
  font-size: 3.5rem;
  font-weight: 600;
`;

const Emoticon = styled.img`
  width: 14rem;
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

const RightContainer = styled.div`
  flex: 1;
  padding: 5rem;
  background-color: #ffffff;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  overflow-y: scroll;
`;

export default AuthFormModal;
