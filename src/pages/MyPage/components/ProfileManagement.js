import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import instance from '../../../api/instance';

const PROFILE_INFO = [
  {
    id: 1,
    name: 'profileName',
    label: '프로필 이름',
    placeholder: '프로필 이름 입력',
  },
  {
    id: 2,
    name: 'userName',
    label: '이름',
    placeholder: '이름 입력',
  },
  {
    id: 3,
    name: 'introduction',
    label: '소개',
    placeholder: '나를 소개하세요',
  },
];

function ProfileManagement() {
  const initialValue = {
    profileName: '',
    userName: '',
    introduction: '',
  };
  const [inputValue, setInputValue] = useState(initialValue);
  const [currentId, setCurrentId] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  useEffect(() => {
    async function fetchingUser() {
      try {
        const response = await instance.get('/users/my');
        const { profileName, userName, introduction } = response.data;
        setInputValue((prevInputValue) => {
          return { ...prevInputValue, profileName, userName, introduction };
        });
      } catch (err) {
        if (err.response.statusText === 'Unauthorized') {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userName');
          navigate('/');
        }
      }
    }
    if (currentId === 0) {
      fetchingUser();
    }
  }, [currentId, navigate]);

  async function updateUser(inputName) {
    try {
      const response = await instance.patch('/users/my', {
        [inputName]: inputValue[inputName],
      });
      if (response.status === 200) {
        setCurrentId(0);
      }
    } catch (err) {
      if (err.response.status === 400) {
        setErrorMessage(err.response.data.message);
      }
    }
  }

  return (
    <ProfileManagementContainer>
      <ProfileManagementTitle>프로필 관리</ProfileManagementTitle>
      <ProfileImageContainer>
        <ProfileImage></ProfileImage>
        <Wrapper>
          <ProfileName>{inputValue.profileName}</ProfileName>
          <BtnWrapper>
            <ImageChangeBtn>이미지 변경</ImageChangeBtn>
            <RemoveBtn>삭제</RemoveBtn>
          </BtnWrapper>
        </Wrapper>
      </ProfileImageContainer>
      <ProfileInfoContainer>
        <ProfileInfoTitle>프로필 정보</ProfileInfoTitle>
        {PROFILE_INFO.map((el) => {
          return (
            <InputWrapper key={el.id}>
              <Label>{el.label}</Label>
              <Input
                name={el.name}
                type="text"
                value={inputValue[el.name]}
                placeholder={el.placeholder}
                readOnly={currentId !== el.id}
                onChange={handleChange}
              />
              <ChangeBtn
                onClick={() => {
                  setCurrentId(el.id);
                  setErrorMessage('');
                }}
              >
                변경
              </ChangeBtn>
              {errorMessage && currentId === el.id && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
              )}
              {currentId === el.id && (
                <ButtonWrapper>
                  <CancelButton
                    onClick={() => {
                      setCurrentId(0);
                    }}
                  >
                    취소
                  </CancelButton>
                  <SaveButton
                    onClick={() => {
                      updateUser(el.name);
                    }}
                  >
                    저장
                  </SaveButton>
                </ButtonWrapper>
              )}
            </InputWrapper>
          );
        })}
      </ProfileInfoContainer>
    </ProfileManagementContainer>
  );
}

const ProfileManagementContainer = styled.div``;

const ProfileManagementTitle = styled.div`
  padding-bottom: 2rem;
  font-size: 2.6rem;
  font-weight: 500;
  border-bottom: 2px solid #222222;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
  border-bottom: 1px solid #d5d5d5;
`;

const ProfileImage = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: #75a99c;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProfileName = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImageChangeBtn = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid #d5d5d5;
  border-radius: 1rem;
  font-size: 1.4rem;
  color: #6c6c6c;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    border: 1px solid #222222;
    color: #222222;
  }
`;

const RemoveBtn = styled(ImageChangeBtn)``;

const ProfileInfoContainer = styled.div`
  padding: 4rem 0;
`;

const ProfileInfoTitle = styled.div`
  margin-bottom: 3rem;
  font-size: 1.8rem;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 40%;
  margin-bottom: 3rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  color: #6c6c6c;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1.5rem 0;
  border: none;
  border-bottom: 1px solid #d5d5d5;
  background: transparent;
  outline: none;
  font-size: 1.8rem;
`;

const ChangeBtn = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 0;
  padding: 1rem 1.5rem;
  border: 1px solid #d5d5d5;
  border-radius: 1rem;
  font-size: 1.4rem;
  color: #6c6c6c;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    border: 1px solid #222222;
    color: #222222;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const CancelButton = styled.div`
  padding: 1.5rem 4rem;
  border: 1px solid #d5d5d5;
  border-radius: 1rem;
  font-size: 1.4rem;
  color: #6c6c6c;
  &:hover {
    cursor: pointer;
  }
`;

const SaveButton = styled(CancelButton)`
  border: none;
  background-color: #222222;
  color: #ffffff;
`;

const ErrorMessage = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #fa5e2c;
`;

export default ProfileManagement;
