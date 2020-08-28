import styled, { css } from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    flex-direction: row;
    max-width: 531px;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-style: normal;
      font-weight: normal;
      font-size: 6rem;
      line-height: 6.9rem;
    }
  }

  .description {
    font-style: normal;
    font-weight: normal;
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin-top: 23px;
  }

  @media (max-width: 1100px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      justify-content: center;
      align-self: center;

      img {
        width: 70px;
        height: 70px;
      }

      h1 {
        font-size: 4rem;
        margin-left: 30px;
      }
    }
  }

  @media (max-width: 753px), (max-width: 376px) {
    padding: 0;

    .title {
      img {
        width: 50px;
        height: 50px;
      }

      h1 {
        font-size: 3.4rem;
      }
    }

    .description {
      font-size: 1.8rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 52px;
  max-width: 408px;
  display: flex;
  background: #71777b;
  border-radius: 8px 8px 8px 8px;
  border: 2px solid transparent;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.hasCorrect &&
    css`
      border-color: #38b636;
    `}

  input {
    width: 80%;
    background: transparent;
    border: 0;
    border-radius: 8px 0 0 8px;

    padding: 12px 20px;
    font-size: 18px;
    line-height: 27px;
  }

  button {
    flex: 1;
    background: transparent;
    border: none;
    border-radius: 0 8px 8px 0;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 753px), (max-width: 376px) {
    max-height: 50px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 17px;
  background: #71777b;
  border: none;
  border-radius: 8px;
  margin-top: 39px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 60px 25px;
  }

  @media (max-width: 753px), (max-width: 376px) {
    flex-direction: column;
    padding: 30px 20px;
    align-items: center;
  }
`;

export const InfoMain = styled.div`
  display: flex;
  max-width: 32em;
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
      font-size: 2.6rem;
      line-height: 3.9rem;
    }

    p {
      margin-left: 5px;
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      line-height: 2.7rem;
    }

    p + p {
      width: 231px;
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
  }

  a {
    max-width: 322px;

    button {
      text-decoration: none;
      align-self: center;
      margin-top: 23px;
      width: 225px;
      height: 42px;
      border: none;
      background: #61a360;
      border-radius: 8px;
      font-weight: bold;
      font-size: 18px;
      line-height: 27px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #24292e;
        border: 1px solid #38b636;
      }
    }
  }

  @media (max-width: 1100px) {
    border: none;
    padding: 0;

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

    a {
      display: flex;
      width: 100%;
      text-decoration: none;

      button {
        width: 100%;
      }
    }
  }

  @media (max-width: 753px), (max-width: 376px) {
    padding: 0 10px;

    img {
      width: 250px;
      height: 250px;
    }

    div {
      align-items: center;

      strong {
        font-size: 2.6rem;
      }

      p {
        font-size: 1.8rem;
      }

      & + p {
        font-size: 1.4rem;
        line-height: 2.1rem;
      }
    }

    a {
      display: flex;
      width: 100%;
      text-decoration: none;

      button {
        width: 100%;
      }
    }
  }
`;

export const InfoSecundary = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 670px;
  width: 100%;
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
        font-size: 2.4rem;
        line-height: 3.6rem;
        margin-left: 18px;
        align-items: baseline;
      }
    }
  }

  strong {
    margin-top: 19px;
    font-weight: normal;
    font-size: 2rem;
    line-height: 3rem;
  }

  @media (max-width: 1100px) {
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
      font-size: 2.4rem;
      font-weight: bolder;
      margin-top: 52px;
      margin-bottom: 32px;
    }
  }

  @media (max-width: 753px), (max-width: 376px) {
    width: 100%;
  }
`;

export const Error = styled.span`
  display: block;
  font-family: "Ubuntu", sans-serif;
  font-size: 70px;
  font-weight: bold;
  line-height: 80px;
  color: #a0a0a0;
`;

export const Repositories = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  min-height: 116px;
  max-width: 670px;

  a {
    background-color: #24292e;
    border-radius: 8px;
    width: 100%;
    padding: 10px 20px;
    text-decoration: none;

    display: flex;
    align-items: flex-start;
    border: 2px solid white;
    transition: background-color 0.3s, transform 0.2s;
    margin-bottom: 10px;

    & + a {
      margin-top: 16px;
    }

    .infos {
      display: block;
      flex: 1;

      strong {
        color: #fff;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
      }

      p {
        color: #fff;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
      }

      footer {
        display: flex;
        margin: 20px 0 0 0;

        div {
          display: flex;
          align-items: flex-start;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          color: #fff;

          p {
            margin-left: 10px;
          }

          & + div {
            margin-left: 25px;
          }
        }
      }
    }

    svg {
      align-self: center;
      margin-left: auto;
      color: #cbcbd6;
    }

    &:hover {
      background-color: #24292e;
      border: 2px solid #38b636;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  @media (max-width: 753px), (max-width: 376px) {
    width: 100%;

    a {
      .infos {
        width: 80%;
        overflow: hidden;

        strong {
          font-size: 1.6rem;
        }
        p {
          font-size: 1.2rem;
        }

        div {
          p {
            font-size: 1.2rem;
          }
        }
      }

      svg {
        width: 20px;
        height: 17.67px;
      }
    }
  }
`;
