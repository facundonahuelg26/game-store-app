import styled, { css } from "styled-components";

export const ContainerCard = styled.div`
  width: ${({ mystyles }) => mystyles.width};
  height: ${({ mystyles }) => mystyles.height};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  z-index:500;
  margin-top: ${({ mystyles }) => mystyles.marginTop};
  
  ${({ toggleSubNav, id }) =>
    toggleSubNav === id &&
    css`
      margin-top: 16px;
      margin-bottom: 16px;

      &:first-child {
        /* background: red; */
        margin-top: 0;
      }
    `}

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;

export const CardSd = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ mystyles }) => mystyles.background};
  border-radius: 2px;
  
  border: 1px solid #dfdfdf;
  border:1px solid #eeeeee;
  display:none;
  z-index:200;
  ${({toggle}) => toggle && css`
    display:flex;
  `};
  button:active,
  button:active * {
    outline: none !important;
    -moz-outline-style: none !important;
  }
  button:focus,
  button:focus * {
    outline: none !important;
    -moz-outline-style: none !important;
  }
`;
