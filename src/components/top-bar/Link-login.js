import React from "react";
import { ContainerLinkLogin, LinkLog as Link } from "./styled-components";
import { routes } from "../../router";

export const LinkLogin = () => {
  return (
    <ContainerLinkLogin>
        <Link to={routes.login}>Iniciar Sesión</Link>
    </ContainerLinkLogin>
  );
};
