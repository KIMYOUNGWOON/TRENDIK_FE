import { styled } from 'styled-components';

function Logout({ closeModal }) {
  return (
    <LogoutContainer>
      <ByeText>BYE!</ByeText>
      <Logo>TRENDIK.</Logo>
      <Emoticon
        src="https://user-images.githubusercontent.com/126956430/278058197-6d742c13-313c-4e33-aa12-57dee9a8f41b.png"
        alt="이모티콘"
      ></Emoticon>
      <LogoutText>로그아웃 되었습니다.</LogoutText>
      <SubText>
        트렌딕의 커뮤니티 서비스는 <br />
        로그인 후 이용하실 수 있습니다.
      </SubText>
      <ButtonWrapper>
        <HomeButton
          onClick={() => {
            closeModal();
          }}
        >
          메인으로 이동
        </HomeButton>
      </ButtonWrapper>
    </LogoutContainer>
  );
}

const LogoutContainer = styled.div`
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
const ByeText = styled.div`
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

const LogoutText = styled.div`
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

export default Logout;
