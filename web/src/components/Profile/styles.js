import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 17px;
  background: #71777B;
  border: none;
  border-radius: 8px;
  margin-top: 39px;

  @media screen and (max-width: 1100px){
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 25px;
  }
`;

export const InfoMain = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: center;
  padding: 5px 26px;
  border-right: 2px solid white;

  img {
    width: 250px;
    height: 250px;
    border: 4px solid white;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    strong {
      font-style: normal;
      font-weight: bold;
      font-size: 26px;
      line-height: 39px;
    }

    p {
      margin-left: 5px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      align-self: flex-start;
    }

    p + p {
      width: 231px;
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
    }
  }

  button {
    margin-top: 23px;
    width: 225px;
    height: 42px;
    border: none;
    background: #61A360;
    border-radius: 8px;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #24292E;
      border: 1px solid #38B636;
    }
  }

  @media screen and (max-width: 1100px){
    border: none;
    padding: 0;
    width: 360px;

    img {
      width: 350px;
      height: 350px;
    }

    div {
      width: 100%;
      padding: 0;
      align-items: flex-start;
      
      strong {
        font-size: 28px;
      }

      p {
        font-size: 18px;
        margin: 16px 0;
      }

      p + p {
        width: 100%;
        font-size: 16px;
        margin: 16px 0;
      }
    }
    
    button {
      width: 100%;
      height: 60px;
    }
  }
`;

export const InfoSecundary = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;
  padding: 19px 55px 19px 0px;

  .statusInfo {
    display: flex;
    list-style: none;
    justify-content: space-between;

    li {
      display: flex;
      align-items: center;
      flex-direction: row;

      p {
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        margin-left: 18px;
        align-items: baseline;
      }
    }
  }

  strong {
    margin-top: 19px;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
  }

  @media screen and (max-width: 1100px){
    margin-top: 50px;
    padding: 0;
    align-items: center;
    width: 100%;

    .statusInfo {
      display: block;

      li + li {
        margin-top: 21px;
      }
    }
    
    strong {
      font-size: 24px;
      font-weight: bolder;
      margin-top: 52px;
      margin-bottom: 32px;
    }
  }
`;
