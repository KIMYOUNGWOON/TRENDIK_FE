import { styled } from 'styled-components';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { SiKakaotalk } from 'react-icons/si';

function SocialLogin() {
  return (
    <>
      <SocialLoginTitle>간편 로그인</SocialLoginTitle>
      <SocialLoginContainer>
        <SocialLoginWrapper>
          <KakaoIcon></KakaoIcon>
          <KakaoText>Kakao</KakaoText>
        </SocialLoginWrapper>
        <SocialLoginWrapper>
          <GoogleIcon></GoogleIcon>
          <GoogleText>Google</GoogleText>
        </SocialLoginWrapper>
        <SocialLoginWrapper>
          <FaceBookIcon></FaceBookIcon>
          <FaceBookText>Facebook</FaceBookText>
        </SocialLoginWrapper>
      </SocialLoginContainer>
    </>
  );
}

const SocialLoginTitle = styled.div`
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
  font-weight: 300;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLoginWrapper = styled.div`
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

const KakaoIcon = styled(SiKakaotalk)`
  font-size: 2rem;
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

export default SocialLogin;
