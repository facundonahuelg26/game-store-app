import styled from "styled-components";

export const SearchBarStyled = styled.form`
width: 250px;
top:17px;
left:250px;
height: 30px;
display: flex;
align-items: center;
position: absolute;
border-radius: 6px;

@media screen and (max-width: 1300px) {
    display:none;
    
  }
input {
  width: 250px;
  height: 100%;
  position: absolute;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  text-indent: 15px;
  ::placeholder{
    font-size:14px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

  }
}


div {
  width: 20px;
  height: 20px;
  position: absolute;
  left:220px;
  top:8px;
  right: 10px;
  font-size: 16px;
}
`;
