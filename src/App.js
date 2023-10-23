import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Main from './Main/Main';

const GlobalStyles = createGlobalStyle`
  ${reset} 

  * {
    box-sizing: border-box;
  }

  html {
    background-color: #e9e9e9;
    font-size: 62.5%;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Main />
    </>
  );
}

export default App;
