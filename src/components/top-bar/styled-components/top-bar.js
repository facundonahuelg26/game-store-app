import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

export const UpperBarStyled = styled.div`
  display: flex;
  width: 100%;
  margin-right: 20px;
  height: 80px;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
  background: #ffffff;
  position: relative;
  z-index:200;
`;

export const ContainerMobileButton = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display:block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 20px;
    left: 10px;
    font-size: 20px;
    z-index:200;
  }
`;

export const CardContainer = styled.div`
  margin-top: 60px;
  width: 172px;
  height: 60px;
`;

export const ContainerButtons = styled.div`
  /* margin-left: 300px; */
  position: absolute;
  /* background: gray; */
  display: flex;
  justify-content: end;
  right: 60px;
  /* justify-content: space-between; */
  width: 600px;

  @media screen and (max-width: 600px) {
    right: 25px;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 15px;
  /* margin-left:15px; */
  width: 132px;
  height: 40px;
 
  @media screen and (max-width: 600px) {
    width: 100px;
  }
`;

export const ContainerLinkLogin = styled.div`
  width: 120px;
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const LinkLog = styled(Link)`
  text-decoration: none;
  color: #92969a;
`;

export const CategoriesContainer = styled.nav`
  ul {
    width: 500px;
    height: 50px;
    /* margin-top: 10px; */
    top: -9px;
    left: 450px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;

    li {
      list-style: none;
      z-index:200;

      a {
        text-decoration: none;
        color: #92969a;
      }
    }
  }

  @media screen and (max-width: 1300px){
    ul{
      width: 100%;
    position: absolute;
    top: 100px;
    left:0;
    }
  }

  @media screen and (max-width: 960px) {
    display:none;
    ${({open}) => open && css`
      display:block;
    `}
  
    ul {
      width: 100%;
      position: absolute;
      top: 100px;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0;

      li {
        padding: 0;
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        &:hover {
          background: #eeeeee;
        }
        a {
          width: 150px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
`;
