import styled from "styled-components";

export const ContainerIcon = styled.div`
    width: 270px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    /* margin-top:17px;
    margin-left:40px; */
    top:17px;
    left:20px;
    padding-right:15px;
    position: absolute;
    /* position:relative; */

    @media screen and (max-width: 1300px){
        left:40%;
    }

    @media screen and (max-width: 960px){
        display:none;
    }

    div{
        width: 30px;
        height:30px;
        left:30px;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#000000;
        border-radius:2px;
        position: absolute;
        svg{
            font-size:20px;
            color:#ffffff;
        }
    }

    p{
        color:#92969a;
        width: 120px;
        left:60px;
        text-align:center;
        position:absolute;
        /* @media screen and (max-width: 1300px){
            display:none;
        } */
    }

`



// @media screen and (max-width: 1300px)