import styled from 'styled-components';

export const Container = styled.a`
  margin-top: 16px;
  a {
    max-width: 670px;
    background-color: transparent;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    border: 2px solid white;
    border-radius: 8px;
    padding: 10px 20px;
    transition: background-color 0.3s, transform 0.2s;
    margin-bottom: 10px;

    .content {

      .infos {
        margin: 0 16px;
        flex: 1;

        strong {
          color: #FFF;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
        }

        p {
          color: #FFF;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
        }
      }

      footer {
        display: flex;
        margin: 28px 0 0 20px;

        div {
          display: flex;
          align-items: flex-start;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          color: #FFF;
          
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
      margin-left: auto;
      color: #cbcbd6;
    }

    &:hover {
      background-color: #24292E;
      border: 2px solid #38B636;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;