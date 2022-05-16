import React from "react";
import styled from "styled-components";
import {FaShoppingCart} from "react-icons/fa";

export const ContainerCartSd = styled.div`
    /* margin: 20px 0 0 20px; */
    top:-15px;
    right:0;
    width:40px;
    height:40px;
    position:absolute;
`

const IconCartsvg = styled.svg`
    width: 25px;
    height: 25px;
    position:absolute;
    top:10px;
    left:6px;
    font-size:24px;
    color:#333333;
`


export const IconCartSd = () => (
    <IconCartsvg>
        <FaShoppingCart/>
    </IconCartsvg>
)

export const IconCircleSd = styled.div`
    position:absolute;
    top:-15px;
    right:-7px;
    width:23px;
    height:23px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;

    font-size:12px;
    font-weight:bold;
    background: linear-gradient(#f67f77, #f44336);
    color:#ffffff;
    
`



