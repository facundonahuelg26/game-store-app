import React from "react";
import Button from "../../../components/button";
import { useOutsideClick } from "../../../hooks/useToggle";
import { sidebarData } from "../helpers/sidebarData";
import { ItemSidebar } from "./ItemSidebar";
import {
  ContainerCate,
  SidebarContainer,
} from "../styled-components/cardProducts";

export const Sidebar = () => {
    const refButtonCate = React.useRef(null);
    const {open, handleButton, handleStopClick} = useOutsideClick(refButtonCate)
  return (
    <>
      <ContainerCate ref={refButtonCate} onClick={handleButton} >
        <Button
          mystyles={{
            background: "#ffffff",
            color: "#000000",
          }}
        >
          Categorias
        </Button>
      </ContainerCate>
      <SidebarContainer open={open} onClick={handleStopClick} >
        {sidebarData.map(({ id, title, subNav }) => (
          <ItemSidebar key={id} title={title} subNav={subNav} />
        ))}
      </SidebarContainer>
    </>
  );
};
