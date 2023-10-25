const AUTH_FORM = {
  signup: [
    {
      id: 'userName',
      name: 'USERNAME',
      type: 'text',
      placeholder: '이름 입력',
    },
    {
      id: 'email',
      name: 'EMAIL',
      type: 'email',
      placeholder: 'ex) trendik@trendik.com',
    },
    {
      id: 'password',
      name: 'PASSWORD',
      type: 'password',
      placeholder: '비밀번호 (영문, 숫자, 특수문자 포함 8자 이상)',
    },
    {
      id: 'repeatPassword',
      name: 'REPEAT PASSWORD',
      type: 'password',
      placeholder: '비밀번호 확인',
    },
  ],
  login: [
    {
      id: 'email',
      name: 'EMAIL',
      type: 'email',
      placeholder: 'ex) trendik@trendik.com',
    },
    {
      id: 'password',
      name: 'PASSWORD',
      type: 'password',
      placeholder: '비밀번호 입력',
    },
  ],
};

export default AUTH_FORM;
