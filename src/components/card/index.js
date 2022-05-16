import React from "react";
import { CardSd, ContainerCard } from "./styled-components";


const Card = ({ mystyles = "auto", myComponent = null, toggleSubNav = null, id = null, toggle = true }) => {
  return (

    <ContainerCard  
    toggleSubNav={toggleSubNav}
        id={id}
    mystyles={mystyles}>
      <CardSd toggle={toggle} mystyles={mystyles}>
        {myComponent}
      </CardSd>
    </ContainerCard>
    
  );
};

export default Card;
