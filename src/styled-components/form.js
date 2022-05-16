import { Field } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 450px;
  height: 500;

  display: flex;
  margin-top: ${({ marginTop }) => marginTop};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 600px) {
    border: none;
  }
  h1 {
    font-weight: 500;
    font-size: 24px;
    color: #303136;
  }

  a {
    margin-bottom: 30px;
  }
`;

export const GoHome = styled.div`
  span,
  a {
    color: #5f6368;
  }
  a {
    text-decoration: none;
  }
`;

export const LinkHome = styled(Link)`
  color: #5f6368;
  text-decoration: none;
`;

export const ContainerField = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled(Field)`
  width: 300px;
  height: 52px;
  /* margin-top: 10px; */
  margin-bottom: 10px;
  display: block;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  text-indent: 15px;
  padding: 0;
  background: #ffffff;
  font-size: 16px;
  letter-spacing: -0.5px;
  outline: none;

  &:focus {
    border: 2px solid #1a73e8;
    background: #ffffff;
    ::placeholder {
      color: #1a73e8;
      font-size: 13px;
    }
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  margin-left: 180px;
  width: 120px;
  height: 40px;
  border-radius: 8px;

  button {
    font-size: 14px;
    cursor:pointer;
  }
`;
export const ContainerReg = styled.div`
  margin-left: -180px;
  margin-top: -65px;
  span,
  a {
    width: auto;
    height: auto;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 30px;
  }
  a {
    text-decoration: none;
  }
`;

export const LinkRegister = styled(Link)`
  margin-left: -180px;
  margin-top: -65px;
  height: auto;
  font-size: 14px;
  text-decoration: none;
  font-weight: 600;
  color: #000000;
  margin-bottom: 30px;
`;

export const Errors = styled.p`
  color: #d93025;
  display: flex;
  justify-content: center;
  font-size: 13px;
  letter-spacing: -0.5px;
  display: flex;
  justify-content: start;
`;
