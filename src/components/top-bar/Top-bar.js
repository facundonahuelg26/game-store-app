import React from "react";
import {Search} from "./Search";
import {UpperBarStyled, ContainerButtons, ContainerMobileButton } from "./styled-components";
import {IconGameStore} from "./Icon";
import {LinkLogin} from "./Link-login";
import {ButtonRegister} from "./Button-register";
import { useSelector } from "react-redux";
import {User} from "./User";
import { Categories } from "./Categories";
import { GiHamburgerMenu } from "react-icons/gi";
import { useOutsideClick } from "../../hooks";


export const TopBar = () => {
  const { isAuth } = useSelector((state) => state.login);
  const refButonMob = React.useRef(null);
  const {open, handleButton, handleStopClick} = useOutsideClick(refButonMob)

  return (
    <>
      <UpperBarStyled>
        <ContainerMobileButton onClick={handleButton} ref={refButonMob} >
      <GiHamburgerMenu/>
        </ContainerMobileButton>
        <IconGameStore/>
        <Search />
        <Categories open={open} handleStopClick={handleStopClick} />
        <ContainerButtons>
          {!isAuth  
           ? <>
            <LinkLogin />
            <ButtonRegister />
            </>
            : <User/>
          }
        </ContainerButtons>
      </UpperBarStyled>
    </>
  );
};


