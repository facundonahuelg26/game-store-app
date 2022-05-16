import styled from "styled-components";

export const ContainerNotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 150px;
    padding: 0;
    margin: 0;
    background-color: #2dd4d7;
    background-image: linear-gradient(45deg, #f2101b, #103df2);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    @media screen and (max-width: 960px) {
      font-size: 100px;
    }
    @media screen and (max-width: 600px) {
      font-size: 50px;
    }
  }
`;
