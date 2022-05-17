import React from "react";
import { TextLogout } from "./styled-components";
import { Link } from "react-router-dom";
import { routes } from "../../router";
import { MdLogin } from "react-icons/md";
import { MdSwitchAccount } from "react-icons/md";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store";
import Button from "../button/index"
import { clearCart } from "../../store/slices/cart";

export const Logout = ({open}) => {
 
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem('accessJWT')
    dispatch(loginSuccess({isAuth:false}))
    dispatch(clearCart())
    localStorage.removeItem('shipping')
    localStorage.removeItem('cart')
    localStorage.removeItem('list')
    window.location.href = ' https://facundonahuelg26.github.io/game-store-app'
  }

  return (
    <TextLogout open={open}>
      <Button>
        <Link to={routes.account}><div>
          <MdSwitchAccount />
        </div><span>
        Mi cuenta</span></Link>
      </Button>
      <Button myFunction={logout}>
        <Link to={routes.home}><div>
          <MdLogin />
        </div><span>Cerrar Sesión</span></Link>
      </Button>
    </TextLogout>
  );
};


