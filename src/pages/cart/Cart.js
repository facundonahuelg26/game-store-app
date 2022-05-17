import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createService } from "../../service";
import {
  addToCart,
  removeAllCart,
  removeOneCart,
} from "../../store/slices/cart";
import { CartItem } from "./components";
import { ContainerCart, Wrapper } from "./styled-components/cart";
import { LastOneItem } from "./components";
import { Data } from "./components";
import { useGetShipping } from "../../hooks/useGetShipping";
import { useErrorTime } from "../../hooks/useErrorTime";
import { Errors } from "../../styled-components";
import { useFetchProducts } from "../../hooks";

const CartPage = () => {
  const { isAuth, userData } = useSelector((state) => state.login);
  const { cart } = useSelector((state) => state.cart);
  const { shippingData } = useSelector((state) => state.shipping);

  const [isDisabled, setIsDisabled] = React.useState(true);
  const [myLink, setMyLink] = React.useState(null);
  const [shippingType, setShippingType] = React.useState("");
  const [error, setError] = React.useState(false);
  const dispatch = useDispatch();

  const { userId } = userData.data;
  useGetShipping(userId);
  const {textError, setTextError} = useErrorTime();
  useFetchProducts()

  const add = (id) => {
    dispatch(addToCart(id));
  };

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); 
  }, [cart]);

  const deleteItemCart = (id, all = false) => {
    if (all) {
      dispatch(removeAllCart(id));
    } else {
      dispatch(removeOneCart(id));
    }
    localStorage.removeItem('cart')
  };

  const payment = async () => {
    const myShipping =
      shippingData !== null && !shippingData.yourData && shippingData.result;
 
    const atLocal = "local";
    let orderData;

    try {
      if (shippingType === "local") {
        orderData = { cart, atLocal };
      } else if (shippingType === "send") {
        orderData = { cart, myShipping };
      }

      setIsDisabled(true);
      const res = await createService(orderData, "payment");
      if(res.statuscode === 200){
        setMyLink(res.initPoint);
        setIsDisabled(false);
        setError(false)
      }else{
        throw res 
      }
    
    } catch (error) {
      console.log(error)
      setError(true)
      setTextError(error.message)
    }
  };
  const handleCheck = (e) => {
    setShippingType(e.target.value);
    setIsDisabled(false);
  };
  return (
    <ContainerCart cart={cart}>
      <Wrapper>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            deleteItemCart={deleteItemCart}
            add={add}
          />
        ))}
        <Data isAuth={isAuth} shippingData={shippingData} />
        <LastOneItem
          cart={cart}
          payment={payment}
          isDisabled={isDisabled}
          myLink={myLink}
          shippingData={shippingData}
          handleCheck={handleCheck}
        />
        {error && <Errors>{textError}</Errors>}
      </Wrapper>
    </ContainerCart>
  );
};

export default CartPage;