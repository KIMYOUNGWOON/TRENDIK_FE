import { styled } from 'styled-components';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { SiKakaotalk } from 'react-icons/si';
import { AiOutlineTwitter } from 'react-icons/ai';

const FOOTER_DATA = {
  guide: ['이용정책', '패널티정책', '커뮤니티 가이드라인', '사회적 책임'],
  support: ['공지사항', '서비스소개', '문의하기', '자주하는 질문'],
  center: [
    '운영시간 평일 10:00 - 18:00(토•일, 공휴일 휴뮤)',
    '점심시간 평일 13:00 - 14:00',
    '1:1 문의하기는 앱에서만 가능합니다.',
  ],
};

const TEXT_LINK = [
  '회사소개',
  '인재채용',
  '제휴제안',
  '이용약관',
  '개인정보처리방침',
];

function Footer() {
  return (
    <FooterContainer>
      <FooterTopContainer>
        <FlexStartWrapper>
          <UseGuideWrapper>
            <UseGuideTitle>이용안내</UseGuideTitle>
            {FOOTER_DATA.guide.map((list, index) => {
              return <UseGuideList key={index}>{list}</UseGuideList>;
            })}
          </UseGuideWrapper>
          <SupportWrapper>
            <SupportTitle>고객지원</SupportTitle>
            {FOOTER_DATA.support.map((list, index) => {
              return <SupportList key={index}>{list}</SupportList>;
            })}
          </SupportWrapper>
        </FlexStartWrapper>
        <CustomerCenterWrapper>
          <CustomerCenterTitle>고객센터 1588-8911</CustomerCenterTitle>
          {FOOTER_DATA.center.map((list, index) => {
            return <CustomerCenterList key={index}>{list}</CustomerCenterList>;
          })}
        </CustomerCenterWrapper>
      </FooterTopContainer>
      <LinkWrapper>
        <TextLogo>TRENDIK.</TextLogo>
        <TextLinkWrapper>
          {TEXT_LINK.map((text, index) => {
            return <TextLink key={index}>{text}</TextLink>;
          })}
        </TextLinkWrapper>
        <IconLinkWrapper>
          <FaceBookIconLink />
          <InstagramIconLink />
          <KakaoIconLink />
          <TwitterIconLink />
        </IconLinkWrapper>
      </LinkWrapper>
      <BuisnessInfoWrapper>
        <CeoName>트렌딕 주식회사 • 대표 이혜영</CeoName>
        <RegistrationNumber>사업자 등록번호 : 571-32-49912</RegistrationNumber>
        <BusinessType>통신판매업: 제 2023-동탄C-003921호</BusinessType>
      </BuisnessInfoWrapper>
      <AddressInfoWrapper>
        <BusinessAddress>
          사업장 소재지: 경기도 화성시 동탄대로 636-3 메가비즈타워C 6층
        </BusinessAddress>
        <Hosting>호스팅 서비스: 네이버 클라우드 (주)</Hosting>
      </AddressInfoWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 5rem 10rem 13rem;
`;

const FooterTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  padding: 5rem 0;
  border-top: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
`;

const FlexStartWrapper = styled.footer`
  display: flex;
  gap: 10rem;
`;

const UseGuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const UseGuideTitle = styled.div`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: #222222;
`;

const UseGuideList = styled.div`
  font-size: 1.4rem;
  color: #6c6c6c;
`;

const SupportWrapper = styled(UseGuideWrapper)``;

const SupportTitle = styled(UseGuideTitle)``;

const SupportList = styled(UseGuideList)``;

const CustomerCenterWrapper = styled(UseGuideWrapper)`
  justify-self: flex-end;
`;

const CustomerCenterTitle = styled(UseGuideTitle)``;

const CustomerCenterList = styled(UseGuideList)``;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const TextLogo = styled.div`
  margin-right: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #222222;
  &:hover {
    cursor: pointer;
  }
`;

const TextLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const TextLink = styled.div`
  font-size: 1.4rem;
  color: #222222;
`;

const IconLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 auto;
  gap: 1rem;
`;

const FaceBookIconLink = styled(AiFillFacebook)`
  font-size: 3rem;
`;

const InstagramIconLink = styled(AiFillInstagram)`
  font-size: 3rem;
`;

const KakaoIconLink = styled(SiKakaotalk)`
  font-size: 2.5rem;
`;

const TwitterIconLink = styled(AiOutlineTwitter)`
  font-size: 3rem;
`;

const BuisnessInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 1rem;
`;

const CeoName = styled.div`
  font-size: 1.2rem;
  color: #6c6c6c;
`;

const RegistrationNumber = styled(CeoName)``;

const BusinessType = styled(CeoName)``;

const AddressInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const BusinessAddress = styled.div`
  font-size: 1.2rem;
  color: #6c6c6c;
`;

const Hosting = styled(BusinessAddress)``;

export default Footer;
