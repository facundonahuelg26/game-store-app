import React from "react";
import Button from "../../../components/button";
import { UpdateData } from "../styled-components";

export const UpdateInfo = ({item, handleClick, id}) => {
    
  return (
    <UpdateData>
      <p>
        {item}
      </p>
      <Button myFunction={() => handleClick(id)}>Actualizar</Button>
    </UpdateData>
  );
};
