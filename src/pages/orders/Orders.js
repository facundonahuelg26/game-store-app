import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useGetShipping } from "../../hooks/useGetShipping";
import { getPaymentService } from "../../service";
import { DataOrder } from "./components/DataOrder";
import { OrderContainer, Wrapper, ContainerCard, MainTitle, ContainerIcon } from "./styled-components";
import Card from "../../components/card";
import { BsCartCheckFill } from 'react-icons/bs';

const OrderPage = () => {
  const { userData } = useSelector((state) => state.login);
  const { shippingData } = useSelector((state) => state.shipping);

  const { userId } = userData.data;

  const { key, search } = useLocation();

  const [link, setLink] = React.useState(false);
  const [info, setInfo] = React.useState([]);

  useGetShipping(userId);

  React.useEffect(() => {
    const changeUrl = () => {
      if (key === "default" && search !== "") {
        setLink(true);
        localStorage.removeItem('cart')
      } else {
        setLink(false);
      }
    };

    changeUrl();
  }, [key, search]);

  let num = search.replace("?", "");
  useEffect(() => {
    (async () => {
      if (search !== "") {
        const res = await getPaymentService(num, userId, 1);
        setInfo(res.result);
      } else {
        if (
          shippingData !== null &&
          shippingData.result &&
          shippingData.result.clientId !== "1"
        ) {
          const res = await getPaymentService(
            shippingData.result.clientId,
            userId,
            2
          );
          setInfo(res.result);
        }

        return;
      }
    })();
  }, [num, search, userId, shippingData]);

  return (
    <OrderContainer>
      <ContainerIcon>
          <svg>
            <BsCartCheckFill/>
          </svg>
        </ContainerIcon>
      <Wrapper>
        <MainTitle>
          <h1>Tus pedidos realizados</h1>
        </MainTitle>
        {shippingData !== null &&
          !shippingData.yourData &&
          shippingData.result &&
          info.map(({ _id, address, height, city, state, items, shippingPrice, amount, paymentStatus }) => (
            <ContainerCard key={_id}>
              <Card
                myComponent={
                  <DataOrder 
                    address={address} 
                    height={height}
                    city={city}
                    state={state}
                    items={items}
                    shippingPrice={shippingPrice}
                    paymentStatus={paymentStatus}
                    amount={amount} 
                  />
                }
              />
            </ContainerCard>
          ))}
        {link && <Navigate to="/orders" />}
      </Wrapper>
    </OrderContainer>
  );
};

export default OrderPage;