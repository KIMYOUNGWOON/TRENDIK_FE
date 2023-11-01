const AUTH_FORM = {
  signup: [
    {
      id: '1',
      name: 'userName',
      type: 'text',
      placeholder: '이름 입력',
    },
    {
      id: '2',
      name: 'profileName',
      type: 'text',
      placeholder: '프로필 이름 입력 (영문, _ 기호만 입력이 가능)',
    },
    {
      id: '3',
      name: 'email',
      type: 'text',
      placeholder: 'ex) trendik@trendik.com',
    },
    {
      id: '4',
      name: 'password',
      type: 'password',
      placeholder: '비밀번호 (영문, 숫자, 특수문자 포함 8자 이상)',
    },
    {
      id: '5',
      name: 'repeatPassword',
      type: 'password',
      placeholder: '비밀번호 확인',
    },
  ],
  login: [
    {
      id: '1',
      name: 'email',
      type: 'email',
      placeholder: 'ex) trendik@trendik.com',
    },
    {
      id: '2',
      name: 'password',
      type: 'password',
      placeholder: '비밀번호 입력',
    },
  ],
};

export default AUTH_FORM;
