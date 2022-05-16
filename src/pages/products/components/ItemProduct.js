import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import IconCart from "../../../components/iconCart";
import { useIntersection } from "../../../hooks/useObserver";
import { routes } from "../../../router/helpers/helperRoutes";
import { ContainerButton, ItemContainer } from "../styled-components";

export const ItemProduct = ({ image, name, price, add, id, stock, cart }) => {
  const [value, setValue] = useState(null);
  const { isAuth } = useSelector((state) => state.login);

  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  useEffect(() => {
    cart.filter((item) => item._id === id && setValue(item.quantity));
  }, [cart, id]);

  return (
    <ItemContainer ref={imgRef}>
      <Link to={`${routes.product}/${name.replace(/ /g, "_")}/${id}`}>
        {isInView && <img src={image} alt={name} className="images" />}
      </Link>
      <div>
        <div>
          <Link to={`${routes.product}/${name.replace(/ /g, "_")}/${id}`}>
            <span>{name}</span>
          </Link>
        </div>
        <div>
          <span>$ {price}</span>
        </div>
        <ContainerButton stock={stock} value={value}>
          <Button
            mystyles={{
              background: stock <= value ? "#9b9b9b" : "#000000",
              color: stock <= value ? "#cdcdcd" : "#ffffff",
            }}
            myFunction={() => add(id, stock, value)}
          >
            Sumar al carrito
          </Button>
          {!isAuth ? null : value && <IconCart value={value} />}
        </ContainerButton>
      </div>
    </ItemContainer>
  );
};
