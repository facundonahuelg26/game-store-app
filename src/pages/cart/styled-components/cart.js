import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

export const ContainerCart = styled.div`
    margin-top:150px;
    width:100%;
    min-height:auto;
    ${({cart}) => (cart.length === 0 || cart.length === 1) && css`
        min-height:80vh;
    `}
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:500;
    padding-bottom:250px;
`
export const Wrapper = styled.div`
    width: 1170px;
    height: auto;
    /* background: green; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position: relative;

    @media screen and (max-width: 1300px){
        width: 100%;
    }
`

/************CARD *********** */
export const ContainerItem = styled.div`
    background: #fafafa;
    width: 98%;
    height: 140px;
    display:flex;
    align-items:center;
    position:relative;
    margin-top:20px;
    border:1px solid #eeeeee;
    border-radius:5px;
    box-shadow: 0px 10px 10px -6px #92969a;
    @media screen and (max-width: 1300px){
        flex-direction:column;
        height:330px;
    }
`

export const ItemTitle = styled.div`
    padding-left:30px;
`

export const ContainerButtons = styled.div`
    position:absolute;
    right:200px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #eeeeee;
    background: #ffffff;
    border-radius:5px;

    @media screen and (max-width: 1300px){
        margin-top:30px;
        position:relative;
        right:0;
    }
    p{
        padding-left:20px;
        padding-right:20px;
    }

`


export const ButtonAddAndSubstract = styled.button`
    width: 40px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:none;
    color: #ffffff;
    cursor: pointer;
    
    svg{
        width: 20px;
        height:20px;
        cursor: pointer;
        font-size:20px;
    }
`

export const UnitPrice = styled.div`
    position:absolute;
    font-weight:600;
    right:80px;

    @media screen and (max-width: 1300px){
        margin-top:10px;
        position:relative;
        right:0;
    }
`


export const DeleteButton = styled.button`
    width: 25px;
    height: 25px;
    border:none;
    background: transparent;
    cursor:pointer;
    /* background: red; */
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    top:10px;
    right:10px;
    svg{
        width: 25px;
        height:25px;
        /* font-size:18px; */
    }

    @media screen and (max-width: 1300px){
        margin-top:10px;
        position:relative;
        right:0;
    }
`

export const LastItem = styled.div`
    width: 98%;
    height: 140px;
    display:flex;
    align-items:center;
    position:relative;
    background: #fafafa;
    margin-top:30px;
    border:1px solid #eeeeee;
    border-radius:5px;
    box-shadow: 0px 10px 10px -6px #92969a;

    @media screen and (max-width: 600px){
        flex-direction:column;
        height:auto;
    }
    div{
        display: flex;
        flex-direction:column;
        
        div{
            display:flex;
            flex-direction:row;
            padding:20px 0 0 25px; 
    
            label{
                padding-left:10px;
                color:#92969a;
                cursor:pointer;
            }
            input{
                cursor: pointer;
            }
        }
        @media screen and (max-width: 600px){
            position:relative;
            padding-right:50px;
        }
    }
        

    h4{
        position:absolute;
        bottom:50px;
        right:40px;
        @media screen and (max-width: 600px){
            position:relative;
            margin-top:100px;
            right:20px;
        }
    }
    button{
        position:absolute;
        width:200px;
        cursor:pointer;
        ${({isDisabled}) => isDisabled && css`
            cursor: default;
        `};
        height:40px;
        bottom:20px;
        right:20px;

        @media screen and (max-width: 600px){
            position:relative;
        }
    }

    @media screen and (max-width: 1300px){
        margin-top:10px;
        position:relative;
        bottom:0;
        right:0;
    }
`

export const UploadedData = styled.p`
    margin-top:100px;
    width: auto;
    height:20px;
    display:flex;
    align-items:center;
    color:#92969a;
    svg{
        margin-left:20px;
        width: 25px;
        height:25px;
        font-size:25px;
        color:green;
    }
`

export const MissingData = styled.p`
    margin-top:40px;
    width: auto;
    height:20px;
    display:flex;
    align-items:center;
    color:#92969a;
    svg{
        margin-left:20px;
        width: 25px;
        height:25px;
        font-size:22px;
        color:red;
    }
`

export const LinkShippingData = styled(Link)`
    margin-top:20px;
    width: 259px;
    height:20px;
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#92969a;
    
    &:hover{
        font-weight:400;
        color:#000000;
    }

    svg{
        margin-left:62px;
        width: 25px;
        height:25px;
        font-size:25px;
        color:green;
    }
`