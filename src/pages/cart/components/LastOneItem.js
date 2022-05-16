import React from "react";
import Button from "../../../components/button";
import { LastItem } from "../styled-components/cart";

export const LastOneItem = ({
  cart,
  payment,
  myLink,
  shippingData,
  isDisabled,
  handleCheck
}) => {
  let mywidth =
    shippingData === null ? "auto" : !shippingData.yourData ? "auto" : "259px";
  let mymargin =
    shippingData === null ? "0" : !shippingData.yourData ? "auto" : "40px";

  const [pay, setPay] = React.useState(false);

  const handleClick = () => {
    window.location.href = myLink;
    setPay(true);
  };

  return (
    <>
      {cart.length === 0 ? (
        <p style={{ width: mywidth, marginTop: mymargin }}>
          No hay elementos en el carrito
        </p>
      ) : (
        <LastItem isDisabled={isDisabled}>
          <div>
            <div>
              <input
                type="radio"
                name="shippingType"
                value="local"
                id="local"
                onChange={handleCheck}
              />
              <label htmlFor="local">Retirar en tienda</label>
            </div>
            <div>
              <input 
                type="radio" 
                name="shippingType" 
                value="send"  
                id="send"
                disabled={shippingData !== null && !shippingData.yourData ? false : true}
                onChange={handleCheck} 
              />
              <label htmlFor="send">Envio a domicilio</label>
            </div>
          </div>
          <h4>
            Total: ${" "}
            {cart.reduce(
              (acc, { quantity, price }) => acc + quantity * price,
              0
            )}
          </h4>
          {myLink ? (
            <Button
              mystyles={{
                background: "#3483fa",
                color: "#ffffff",
                padding: "12px",
              }}
              myFunction={handleClick}
              disabled={pay}
            >
              Pagar con Mercado Pago
            </Button>
          ) : (
            <Button
              mystyles={{
                background: isDisabled ? '#9b9b9b' : '#000000',
                color: "#ffffff",
                padding: "14px",
              }}
              myFunction={payment}
              disabled={isDisabled}
            >
              Continuar compra
            </Button>
          )}
        </LastItem>
      )}
    </>
  );
};
