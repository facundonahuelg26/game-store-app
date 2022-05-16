import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData, loginData, loginSuccess } from "../store";
import { addAllToCart } from "../store/slices/cart";

export const useRecoverLocalStor = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const recoverData = localStorage.getItem("accessJWT");
        if (recoverData) {
          const user = JSON.parse(recoverData);
          dispatch(loginSuccess({ isAuth: true }));
          dispatch(loginData({ userData: user }));
        }
      }, [dispatch]);
      
      useEffect(() => {
        const recoverData = localStorage.getItem("cart");
        if (recoverData) {
          const mycart = JSON.parse(recoverData);
          
          dispatch(addAllToCart(mycart));
        }
      }, [dispatch]);
    
      useEffect(() => {
        const value = localStorage.getItem("shipping");
        if (value) {
          const saveValue = JSON.parse(value);
          dispatch(addData(saveValue));
        }
      }, [dispatch]);
}