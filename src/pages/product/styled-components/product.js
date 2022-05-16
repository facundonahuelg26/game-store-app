import styled from "styled-components";
import { css } from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  min-height: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom:100px;
`;

export const Wrapper = styled.div`
  width: 1425px;
  height: auto;

  @media screen and (max-width: 1480px) {
    width: 1085px;
    margin-top: 160px;
  }
`;

export const ContainerItems = styled.div`
  width: 98%;
  height: auto;
  h2 {
    color: #92969a;
    @media screen and (max-width: 1100px) {
      padding-left: 20px;
      font-size: 20px;
    }
  }
`;

export const ItemsProduct = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const BigImage = styled.div`
  width: 698px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;

    img {
      width: 300px;
    }
  }
`;

export const MiniImage = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  width: 160px;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #61dafb;

  @media screen and (max-width: 1100px) {
    margin-left: 20px;
  }
`;

export const WrapperField = styled.div`
  textarea {
    width: 100%;
    height: 100px;
    resize: none;
    outline: none;
    border-radius: 3px;
    border: 1px solid #61dafb;
    color: #92969a;

    @media screen and (max-width: 1100px) {
      margin-left: 12px;
      width: 95%;
    }
  }
`;

export const ContainerText = styled.div`
  width: 697px;
  height: auto;

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding-left: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 20px;
  }
`;

export const Title = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  border-bottom: 1px solid #cdcdcd;
  h1 {
    color: #92969a;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const Price = styled.div`
  border-bottom: 1px solid #cdcdcd;
  h2 {
    color: #61dafb;
  }

  @media screen and (max-width: 1100px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const DataText = styled.div`
  border-bottom: 1px solid #cdcdcd;
  p {
    padding-left: 10px;
    color: #61dafb;
  }
`;
export const ContainerIconText = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 30px;
    height: 30px;
    color: #61dafb;
    ${({stock, value}) => stock <= value && css`
      color:#cb3234;
    `}
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 24px;
      height: 24px;
    }
  }

  p{
    ${({stock, value}) => stock <= value && css`
      color:#cb3234;
    `}
  }
`;

export const ContainerButton = styled.div`
  width: 200px;
  height: 52px;
  margin-top: 30px;
  display:flex;
  position:relative;
  button{
    width: 150px;
    cursor:pointer;
  }

  div{
    top:8px;
    div{
      top:-5px;
    }
  }
`;

export const ContainerButtonForm = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: end;
  padding-right: 30px;
  button {
    width: 150px;
  }

  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;

export const ContainerComments = styled.div`
  width: 100%;
`

export const CommentsUsers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 20px;
  background: #e3e3e3;
  border-radius: 3px;
  margin-top: 10px;
  div {
    width: 24px;
    height: 24px;
    svg {
      width: 24px;
      height: 24px;
      font-size:20px;
    }
  }

  p {
    padding-left:10px;
    color: #222222;
    font-weight: 500;
    font-size:15px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 12px;
    width: 95%;
    p{
      font-size:14px;
    }
  }
`;


export const CommentsAdmin = styled(CommentsUsers)`
  background:#282c34;
  svg{
    color:#61dafb;
  }
  p{
    color:#e3e3e3;
  }
`