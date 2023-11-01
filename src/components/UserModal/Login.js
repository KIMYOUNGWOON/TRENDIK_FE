import { styled } from 'styled-components';
import useInput from '../../hooks/useInput';
import instance from '../../api/instance';
import AUTH_FORM from '../../data/authForm';
import { useState } from 'react';

function Login({ setIsProcessed }) {
  const initialValue = { email: '', password: '' };
  const [inputValue, handleChange] = useInput(initialValue);
  const [errorMessage, setErrorMessage] = useState('');
  const isRequired = Object.values(inputValue).every((value) => value);

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const response = await instance.post('/users/login', {
        email: inputValue.email,
        password: inputValue.password,
      });

      const { status, data } = response;

      if (status === 200) {
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('accessToken', data.accessToken);
        setIsProcessed((prev) => !prev);
      }
    } catch (err) {
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <LoginContainer>
      <LoginText>로그인</LoginText>
      <ErrorText>{errorMessage}</ErrorText>
      <Form onSubmit={signIn}>
        {AUTH_FORM.login.map((el) => {
          return (
            <InputWrapper key={el.id}>
              <Label htmlFor={el.name}>• {el.name.toUpperCase()}</Label>
              <Input
                id={el.name}
                name={el.name}
                type={el.type}
                placeholder={el.placeholder}
                value={inputValue[el.id]}
                autoComplete="off"
                onChange={handleChange}
              ></Input>
            </InputWrapper>
          );
        })}
        <CheckWrapper>
          <CheckBox type="checkbox" />
          <CheckBoxContent>이메일 저장</CheckBoxContent>
        </CheckWrapper>
        <SubmitButton $activate={isRequired.toString()} disabled={!isRequired}>
          로그인
        </SubmitButton>
      </Form>
      <ForgotPassword>비밀번호를 잊어버렸나요?</ForgotPassword>
    </LoginContainer>
  );
}

const LoginContainer = styled.div``;

const LoginText = styled.h2`
  font-size: 3rem;
  margin-bottom: 6rem;
`;

const ErrorText = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 4rem;
  color: #fa5e2c;
`;

const Form = styled.form``;

const InputWrapper = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  color: #686868;
  font-size: 1.2rem;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 3rem;
  border: none;
  border-bottom: 1px solid #e9e9e9;
  outline: none;
  background-color: transparent;
  caret-color: #222222;
  color: #222222;
  font-size: 1.7rem;
  transition: 1s;
  &::placeholder {
    color: #d3d3d3;
    font-size: 1.7rem;
  }
  &:focus {
    border-bottom: 1px solid #222222;
  }
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const CheckBox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #8d8d8d;
  &:hover {
    cursor: pointer;
  }
`;

const CheckBoxContent = styled.div`
  color: #525252;
  font-size: 1.4rem;
  line-height: 3rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 7.2rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({ $activate }) =>
    $activate === 'true' ? '#222222' : '#ebebeb'};
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

const ForgotPassword = styled.div`
  width: 100%;
  color: #222222;
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: underline;
  text-align: right;
  &:hover {
    cursor: pointer;
  }
`;

export default Login;
