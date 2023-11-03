import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import instance from '../../../api/instance';

const LOGIN_INFO = [
  {
    id: 1,
    name: 'email',
    label: '이메일',
    type: 'email',
    placeholder: '이메일 입력',
  },
  {
    id: 2,
    name: 'password',
    label: '비밀번호',
    type: 'password',
    placeholder: '새 비밀번호 입력',
  },
];

function LoginInfo() {
  const initialValue = {
    email: '',
    password: '',
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
        const { email } = response.data;
        setInputValue((prevInputValue) => {
          return { ...prevInputValue, email };
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

  async function deleteUser() {
    try {
      const response = await instance.delete('/users/my');

      if (response.status === 200) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userName');
        navigate('/');
      }
    } catch (err) {
      if (err.response.status === 400) {
        console.log(err.response);
      }
    }
  }

  return (
    <LoginInfoContainer>
      <LoginInfoTitle>로그인 정보</LoginInfoTitle>
      <MyAccount>내 계정</MyAccount>
      {LOGIN_INFO.map((el) => {
        return (
          <InputWrapper key={el.id}>
            <Label>{el.label}</Label>
            <Input
              name={el.name}
              type={el.type}
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
      <WithdrawBtn onClick={deleteUser}>계정 삭제</WithdrawBtn>
    </LoginInfoContainer>
  );
}

const LoginInfoContainer = styled.div``;

const LoginInfoTitle = styled.div`
  padding-bottom: 2rem;
  font-size: 2.6rem;
  font-weight: 500;
  border-bottom: 1px solid #222222;
`;

const MyAccount = styled.div`
  margin: 3rem 0;
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

const WithdrawBtn = styled.div`
  padding: 1.5rem 0;
  width: 10rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  background-color: #d5d5d5;
  color: #626262;
  text-align: center;
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    background-color: #222;
    color: #fff;
  }
`;

export default LoginInfo;
