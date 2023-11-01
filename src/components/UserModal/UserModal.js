import { useState } from 'react';
import { styled, keyframes } from 'styled-components';
import AuthFormModal from './AuthFormModal';
import Logout from './Logout';
import SuccessModal from './SuccessModal';

function UserModal({ modalType, setModalType, closeModal }) {
  const [isProcessed, setIsProcessed] = useState(false);
  return (
    <UserModalContainer>
      {isProcessed ? (
        <SuccessModal
          modalType={modalType}
          setModalType={setModalType}
          setIsProcessed={setIsProcessed}
          closeModal={closeModal}
        />
      ) : modalType !== 'logout' ? (
        <AuthFormModal
          modalType={modalType}
          setModalType={setModalType}
          setIsProcessed={setIsProcessed}
        />
      ) : (
        <Logout closeModal={closeModal} />
      )}
    </UserModalContainer>
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

const UserModalContainer = styled.div`
  animation: ${opacityAnimation} 1s;
  z-index: 1;
`;

export default UserModal;
