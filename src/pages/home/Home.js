import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Container, Title, Wrapper } from "./styled-components";


const HomePage = () => {
  const {key} = useLocation()
  let URLactual = window.location.href;

  React.useEffect(() => {
    const changeUrl = () => {
    if(key === "default" && URLactual.includes("preference_id")){
      window.location.href = 'https://facundonahuelg26.github.io/game-store-app'
    }
    }

    changeUrl()
  }, [key, URLactual])

  return (
    <Container>
      <Wrapper>
        <p>Compra tu pc en</p>
      <Title>Game Store</Title>
      </Wrapper>
    </Container>
  );
};


export default HomePage;