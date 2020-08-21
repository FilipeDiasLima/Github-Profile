import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .title {
    display: flex;
    flex-direction: row;
    width: 531px;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-style: normal;
      font-weight: normal;
      font-size: 60px;
      line-height: 69px;
    }
  }

  .description {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
    margin-top: 23px;
  }

  @media screen and (max-width: 1100px){
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      justify-content: center;
      align-self: center;
      h1 {
        font-size: 40px;
        margin-left: 30px;
      }
    }
  }
`;

export const Form = styled.div`
  margin-top: 52px;
  width: 408px;
  height: 55px;
  display: flex;

  input {
    width: 80%;
    background: #71777B;
    border: none;
    border-radius: 8px 0 0 8px;
    padding: 12px 20px;
    font-size: 18px;
    line-height: 27px;
  }

  button {
    flex: 1;
    background: #71777b;
    border: none;
    border-radius: 0 8px 8px 0;
  }
  
`;
