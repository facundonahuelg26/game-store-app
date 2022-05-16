import React from "react";
import { Link } from "react-router-dom";
import { ButtonSd } from "./styled-components";

const Button = ({ children, to, myFunction = null, myType = 'button', mystyles='', disabled = false }) => {

  return to ? (
    <ButtonSd 
    as={Link} 
    to={to}
    onClick={myFunction}
    mystyles={mystyles}
    >
      {children}
    </ButtonSd>
  ) : (
    <ButtonSd
    onClick={myFunction}
    type={myType}
    mystyles={mystyles}
    disabled={disabled}
    >{children}</ButtonSd>
  );
};

export default Button;
