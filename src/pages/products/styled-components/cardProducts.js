import styled from "styled-components";
import { css } from "styled-components";

export const ContainerCardProd = styled.div`
  width: 530px;
  height: 100%;
  margin: auto;

  @media screen and (max-width: 960px) {
    width: 300px;
  }

  button {
    width: 132px;
    height: 35px;
    margin-top: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  background: #fafafa;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -6px #92969a;
  div {
    margin-top: 15px;
    margin-left: 15px;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerInfo = styled.div``;

/************************SIDEBAR  */

export const SidebarContainer = styled.div`
  width: 280px;
  height: auto;
  margin-left: 10px;
  padding-top: 17px;

  @media screen and (max-width: 650px) {
    display: none;
    margin: auto;

    ${({ open }) =>
      open &&
      css`
        display: block;
      `}
  }
`;

export const WrapperSid = styled.div`
  margin-left: 10px;

  p {
    margin-left: 25px;
    color: #92969a;

    &:hover {
      font-weight: 500;
    }
  }
`;
export const Title = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  span {
    color: #000000;
    font-weight: 700;
    margin-left: 5px;
  }
`;

export const ContainerIcon = styled.div`
  width: 20px;
  height: 20px;

  @media screen and (max-width: 650px) {
    display: none;
  }

  svg {
    font-size: 20px;
    color: #92969a;
  }
`;

export const ContainerCate = styled.div`
  display: none;
  @media screen and (max-width: 650px) {
    display: block;
    width: 120px;
    height: 35px;
    /* background: gray; */
    margin: auto;
    margin-bottom: 20px;
    text-align: center;
    line-height: 35px;
    border-radius: 5px;
    border: 1px solid #eeeeee;
    button {
      font-weight: 700;
    }
  }
`;
export const ContainerButton = styled.div`
  position: relative;
  width: 170px;
  height: auto;
  button {
    cursor: pointer;
    ${({ stock, value }) =>
      stock <= value &&
      css`
        cursor: default;
      `}
  }
`;

export const ContainerQuantity = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  top: -10px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #ffffff;
`;
