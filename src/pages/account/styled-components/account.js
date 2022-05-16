import styled from "styled-components"

export const AccountContainer = styled.div`
    min-height:100vh;
    display:flex;
    justify-content:center;
    alig-items:center;
`

export const Wrapper = styled.div`
    width: 420px;
    height:auto;
    @media screen and (max-width: 600px) {
        width: 320px;
    }
`

export const Data = styled.div`
    width: 98%;
    margin-top:100px;
    display:flex;
    flex-direction:column;
    color:#92969a;
    h1{
        text-align:center;
        color:#000000;
    }

    a{
        padding-top:15px;
        text-decoration:none;
        color:#000000;
        font-weight:600;
    }
`

export const NameAccount = styled.p`
    text-transform:capitalize;
`

export const UpdateData = styled.div`
    margin-top: 10px;
    display:flex;
    justify-content: space-between;
    button{
        width: auto;
        height: 48px;
        padding:0 15px 0 15px;
        background: #000000;
        color: #ffffff;
        border-radius:5px;
        cursor:pointer;
    }
`

export const OrderTitle = styled.div`
    margin-top:35px;
    
    a{
        text-decoration:none;
        color:#61dafb;
        font-weight:500;
        
        &:hover{
            font-weight:900;
        }
    }

    p{
        
        color:#92969a;
    }
`

