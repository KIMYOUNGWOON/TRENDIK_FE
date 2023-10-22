import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Main from './Main';

const GlobalStyles = createGlobalStyle`
  ${reset} 
  html {
    font-size: 62.5%;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #e9e9e9;
  }

  * {
    box-sizing: border-box;
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
