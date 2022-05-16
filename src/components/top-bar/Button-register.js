import React from "react";
import { routes } from "../../router";
import Button from "../button";
import { ContainerButton } from "./styled-components";


export const ButtonRegister = () => {
  return (
    <>
      <ContainerButton>
        <Button 
        to={routes.register}
        mystyles={{
          background: '#000000',
          color: '#ffffff'
        }}
        >
          Registrarse
        </Button>
      </ContainerButton>
    </>
  );
};


