import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { LuArrowUpToLine } from 'react-icons/lu';

function MoveTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible ? (
    <MoveTopButton onClick={scrollToTop}>
      <MoveTopIcon />
    </MoveTopButton>
  ) : null;
}

const MoveTopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 5rem;
  bottom: 3rem;
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const MoveTopIcon = styled(LuArrowUpToLine)`
  color: #ffffff;
  font-size: 2.5rem;
`;

export default MoveTop;
