import React from "react";
import { ContainerCartSd, IconCartSd, IconCircleSd } from "./styled-components";

const IconCart = ({value}) => {
  return (
    <ContainerCartSd>
      <IconCartSd />
      <IconCircleSd>{value}</IconCircleSd>
    </ContainerCartSd>
  );
};

export default IconCart;
