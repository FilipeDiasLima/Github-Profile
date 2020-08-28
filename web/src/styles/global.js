import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #24292E;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    color: #FFF;
  }

  #root {
    max-width: 1112px;
    margin: 0 auto;
    padding: 95px 20px 10px 20px;

    @media(max-width: 1100px) {
      display: flex;
      flex-direction: column;
      padding: 95px 42px;
      align-items: center;
    }

    @media (max-width: 752px), (max-width: 376px) {
      display: flex;
      flex-direction: column;
      width: 100vw;
      padding: 60px 20px;
    }
  }

  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  h1 {
    font-family: 'Ubuntu', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
