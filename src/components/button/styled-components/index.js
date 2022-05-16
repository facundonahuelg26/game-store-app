import styled from "styled-components";
import { css } from "styled-components";

export const ButtonSd = styled.button`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background:${({mystyles}) => mystyles.background};
    border-radius:7px;
    border-style:none;
    color: ${({mystyles}) => mystyles.color};
    font-size: 15px;
    font-weight:400;
    z-index:100;
    padding: ${({mystyles}) => mystyles.padding};
    ${({to}) => to && css`
        text-decoration:none;
    `}
`




