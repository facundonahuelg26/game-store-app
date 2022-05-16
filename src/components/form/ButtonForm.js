import React from "react";
import { ContainerButton } from "../../styled-components";
import Button from "../button";

export const ButtonForm = ({myText, condition}) => {
  return (
    <ContainerButton>
      <Button
        myType="submit"
        mystyles={{
          background: "#000000",
          color: "#ffffff",
        }}
        disabled={condition}
      >
        {myText}
      </Button>
    </ContainerButton>
  );
};
