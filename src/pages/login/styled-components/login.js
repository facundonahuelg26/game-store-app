import styled from "styled-components";

export const ProgressBar = styled.div`
  width: 100%;
  height: 2px;
  position:absolute;
    top:0;
    z-index:200;
  /* background: #222222; */

  div {
    background: linear-gradient(
      90deg,
      rgb(32, 12, 255) 0%,
      rgb(29, 91, 224) 100%
    );
    box-shadow: 0 3px 3px -5px #00c0fa, 0 2px 5px rgb(29, 91, 224);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    opacity: 0;
    transition: 1s ease 0.3s;
    border-radius:3px;
    height:2px;
  }
`;

