import React from "react";
import { Link } from "react-router-dom";
import { ContainerReg } from "../../styled-components";

export const LinkTwoForm = ({condition, myText, route, myState = null}) => {
  return (
    <>
      {condition ? (
        <ContainerReg>
          <span>{myText}</span>
        </ContainerReg>
      ) : (
        <ContainerReg>
          <Link to={route} state={myState}>{myText}</Link>
        </ContainerReg>
      )}
    </>
  );
};
