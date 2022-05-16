import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router/helpers/helperRoutes";
import { CategoriesContainer } from "./styled-components/top-bar";

export const Categories = ({ open, handleStopClick }) => {
  return (
    <CategoriesContainer onClick={handleStopClick} open={open}>
      <ul>
        <li>
          <Link to={routes.home}>Inicio</Link>
        </li>
        <li>
          <Link to={routes.products}>Productos</Link>
        </li>
        <li>
          <Link to={routes.cart}>Carrito</Link>
        </li>
      </ul>
    </CategoriesContainer>
  );
};
