import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { routes } from "../../../router";
import { ContainerCard } from "../styled-components";

export const ItemsSelected = ({ open }) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const itemsMax = () => {
    if (search.includes("category")) {
      if (search.includes("&price=max")) return;
      if (search === `?category=${params.get("category")}&price=min`) {
        navigate(
          `${routes.products}?category=${params.get("category")}&price=max`
        );
      } else {
        navigate(`${routes.products}${search}&price=max`);
      }
    } else if (search.includes("term")) {
      if (search.includes("&price=max")) return;
      if (params.get('price') === 'min') {  
        navigate(`${routes.products}?term=${params.get("term")}&price=max`);
      } else {
        navigate(`${routes.products}${search}&price=max`);
      }
    } else {
      navigate(`${routes.products}?price=max`);
    }
  };

  const itemsMin = () => {
    if (search.includes("category")) {
      if (search.includes("&price=min")) return;
      if (search === `?category=${params.get("category")}&price=max`) {
        navigate(
          `${routes.products}?category=${params.get("category")}&price=min`
        );
      } else {
        navigate(`${routes.products}${search}&price=min`);
      }
    } else if (search.includes("term")) {
      if (search.includes("&price=min")) return;
      if (params.get('price') === 'max') {        
        navigate(`${routes.products}?term=${params.get("term")}&price=min`);
      } else {
        navigate(`${routes.products}${search}&price=min`);
      }
    } else {
      navigate(`${routes.products}?price=min`);
    }
  };
  return (
    <ContainerCard open={open}>
      <span onClick={itemsMax}>Mayor precio</span>
      <span onClick={itemsMin}>Menor precio</span>
    </ContainerCard>
  );
};
