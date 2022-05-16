import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height:100vh;
  position: relative;
  padding-bottom:80px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerProducts = styled.div`
  width: 840px;
  height: auto;
  display: flex;
  flex-direction: column;
  position:relative;

  
`;
export const ContainerItemOne = styled.div`
  width: 98%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Selected = styled.div`
  margin-top: 120px;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;

  div {
    display: flex;
    align-items: center;
    span {
      color: #ffffff;
      font-size: 14px;
    }

    div {
      color: #ffffff;
      width: 25px;
      height: 25px;
      margin-left: 5px;

      svg {
        font-size: 20px;
        margin: auto;
      }
    }
  }

  span {
    color: #ffffff;
    font-size: 14px;
  }
`;

export const TitlleShowProducts = styled.span`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ContainerCard = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  cursor:pointer;
  background: #fafafa;

  span {
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
  }

  display:none;
  ${({open}) => open && css`
    display:flex;
  `}
`;


export const ContainerSidAndProd = styled.div`
  width: 100%;
  height:auto;
  display: flex;
  ul{
    margin:0;
    padding-left:25px;
    margin-top:10px;
    margin-bottom:10px;
  }
  li{
    list-style:none;
    padding:0;
    padding-top:5px;
    padding-bottom: 5px;
  }
  a{
    text-decoration:none;
    color:#92969a;
    &:hover{
      font-weight:600;
      color:#61dafb;
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction:column;
  }
`

