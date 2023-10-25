import { styled } from 'styled-components';
import useInput from '../hooks/useInput';
import instance from '../api/instance';
import AUTH_FORM from '../data/authForm';

function SignUp() {
  const initialValue = {
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
    requiredAgree: false,
  };
  const [inputValue, handleChange] = useInput(initialValue);
  const isRequired = Object.values(inputValue).every((value) => value);

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const response = await instance.post('/users/signup', {
        userName: inputValue.userName,
        email: inputValue.email,
        password: inputValue.password,
        repeatPassword: inputValue.repeatPassword,
        requiredAgree: inputValue.requiredAgree,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignUpContainer>
      <SignUpText>회원가입</SignUpText>
      <Form onSubmit={signUp}>
        {AUTH_FORM.signup.map((el, index) => {
          return (
            <InputWrapper key={el.id}>
              <Label htmlFor={el.id}>• {el.name}</Label>
              <Input
                id={el.id}
                name={el.id}
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
          <CheckBox
            type="checkbox"
            name="requiredAgree"
            checked={inputValue.requiredAgree}
            onChange={handleChange}
          />
          <CheckBoxContent>
            [필수] 만 14세 이상이며, 개인정보 수집 및 이용에 모두 동의합니다.
          </CheckBoxContent>
        </CheckWrapper>
        <CheckWrapper>
          <CheckBox type="checkbox" name="selectAgree" />
          <CheckBoxContent>
            [선택] 광고성 정보 수신에 모두 동의합니다.
          </CheckBoxContent>
        </CheckWrapper>
        <SubmitButton $activate={isRequired.toString()} disabled={!isRequired}>
          가입하기
        </SubmitButton>
      </Form>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div``;

const SignUpText = styled.h2`
  font-size: 3rem;
  margin-bottom: 5rem;
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

export default SignUp;
