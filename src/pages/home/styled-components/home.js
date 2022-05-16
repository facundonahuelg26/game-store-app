import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 90vh;
`

export const Wrapper = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p{
        font-size:50px;
        padding:0;
        margin:0;

        @media screen and (max-width: 600px){
        font-size:25px;
        }
    }
`

export const Title = styled.h1`
  font-size:150px;
  padding:0;
  margin:0;
  background-color: #2dd4d7;
    background-image: linear-gradient(45deg, #f2101b, #103df2);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    @media screen and (max-width: 960px){
        font-size:100px;
    }
    @media screen and (max-width: 600px){
        font-size:50px;
    }
`