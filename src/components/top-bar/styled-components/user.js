import styled from "styled-components";
import { css } from "styled-components";

export const ContainerUser = styled.div`
  width: 172px;
  height: 52px;
  margin-top: 10px;
  margin-left:15px;
  
  @media screen and (max-width: 1300px) {
    margin-left:0;
  }
`;

export const Name = styled.button`
  width: 172px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #000000;
  border-radius: 5px;
  border-style: none;
  color: #61dafb;
  font-size: 15px;
  font-weight: 600;
  z-index: 200;
  text-transform:capitalize;
  cursor: pointer;
`;


export const TextLogout = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  display:none;
  ${({open}) => open && css`
    display:flex;
  `}

  button {
    //list-style: none;
    width: 100%;
    height: 40px;
    background: transparent;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius:0; 
    cursor:pointer;
    &:hover{
      font-weight:600;
    } 
    
  }

  a {
    width: 100%;
    height:100%;
    line-height: 40px;
    text-decoration: none;
    color:#ffffff;
    display: flex;
    align-items:center;
    position:relative;
    z-index:500;

  }

  div {
    width: 25px;
    height: 25px;
    z-index:200;
    position:absolute;
    left:15px;
  }

  svg {
    font-size: 25px;
    color:#ffffff;
    z-index:200;
    
  }

  span{
    position: absolute;
    left:55px;
  }
`;
