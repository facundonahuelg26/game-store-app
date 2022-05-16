import styled from "styled-components";

export const OrderContainer = styled.div`
    min-height:80vh;
    display:flex;
    justify-content:center;
    alig-items:center;
    margin-top:80px;
    @media screen and (max-width: 1300px) {
        margin-top:150px;
    }
`

export const Wrapper = styled.div`
    width: 420px;
    height:auto;
    @media screen and (max-width: 600px) {
        width: 310px;
    }
`
export const ContainerIcon = styled.div`
    width: 200px;
    height:200px;
    position:absolute;
    left:300px;
    top:500px;

    svg{
        font-size:150px;
        color:#cdff00;
    }

    @media screen and (max-width: 1350px) {
        left:900px;
    }
    @media screen and (max-width: 1100px) {
        display:none;
    }
`
export const MainTitle = styled.div`
    display: flex;
    justify-content:center;
    padding-bottom:20px;
    h1{
        color:#61dafb;

        @media screen and (max-width: 600px) {
            font-size:25px;
        }
    }
`

export const ContainerCard = styled.div`
    box-shadow: 0px 10px 10px -6px #92969a;

    div{
        padding-top:10px;
        padding-bottom:10px;
    }
    p{
        padding: 5px 0 5px 30px;
        color:#000000;
        font-weight:600;

        @media screen and (max-width: 600px) {
            display:flex;
            flex-direction:column;
            span{
                padding-top:5px;
            }
        }
    }
    

    span{
        padding-left:20px;
    }
`