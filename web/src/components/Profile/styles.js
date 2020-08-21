import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 593px;
  padding: 17px;
  background: #71777B;
  border: none;
  border-radius: 8px;
  margin-top: 39px;
`;

export const InfoMain = styled.div`
  display: flex;
  max-width: 320px;
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
`;
