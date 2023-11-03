import { styled } from 'styled-components';
import { CiMenuBurger } from 'react-icons/ci';
import { HashLink } from 'react-router-hash-link';

const urlFragmentList = [
  { id: 1, name: 'OOTD' },
  { id: 2, name: 'NEW IN' },
  { id: 3, name: 'DRAW' },
  { id: 4, name: 'COLLECTION' },
];

function Nav() {
  return (
    <NavContainer>
      <NavButtonWrapper>
        <ButtonText>T. Nav</ButtonText>
        <HamburgerButton />
      </NavButtonWrapper>
      <UrlFragmentWrapper>
        <UrlFragmentTitle>Home</UrlFragmentTitle>
        {urlFragmentList.map((item) => {
          return (
            <UrlFragment key={item.id}>
              <Link smooth to={`/#${item.name}`}>
                {item.name}
              </Link>
            </UrlFragment>
          );
        })}
      </UrlFragmentWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 55.6rem;
  height: 7.2rem;
  padding: 0.6rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
`;

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-basis: 12rem;
  height: 100%;
  border-radius: 1rem;
  background-color: #222222;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  color: #ffffff;

  img {
    width: 2rem;
  }
`;

const HamburgerButton = styled(CiMenuBurger)`
  font-size: 1.6rem;
  color: #ffffff;
`;

const UrlFragmentWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1 auto;
  gap: 0.6rem;
  height: 100%;
  padding: 0.6rem;
  border-radius: 1rem;
  background-color: #3e3e3e;
`;

const UrlFragmentTitle = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  color: #cbcbcb;
  font-size: 1.4rem;
  font-weight: 500;
`;

const UrlFragment = styled.li`
  flex: 1 auto;
  border: 1px solid #4e4e4e;
  border-radius: 0.8rem;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    border: 1px solid #ffffff;
  }
`;

const Link = styled(HashLink)`
  display: block;
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  color: #cbcbcb;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 300;
`;

export default Nav;
