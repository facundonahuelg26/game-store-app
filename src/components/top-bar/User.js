import React from "react";
import { useSelector } from "react-redux";
import { useOutsideClick } from "../../hooks";
import Card from "../card";
import { Logout } from "./Logout";
import { ContainerUser, Name } from "./styled-components";

export const User = () => {
  const refButtonUser = React.useRef(null);

  const { open, handleButton, handleStopClick } =
    useOutsideClick(refButtonUser);
  const { userData } = useSelector((state) => state.login);

  const { name, lastname } = userData.data;
  return (
    <>
      <ContainerUser>
        <Name onClick={handleButton} ref={refButtonUser}>
          {name} {lastname}
        </Name>
        <div onClick={handleStopClick}>
          <Card
            myComponent={<Logout open={open} />}
            mystyles={{
              height: "auto",
              background:"#000000"
            }}
          />
        </div>
      </ContainerUser>
    </>
  );
};
