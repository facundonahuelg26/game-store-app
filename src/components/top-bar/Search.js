import React from "react";
import {SearchBarStyled} from "./styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { useProducts } from "../../hooks";

export const Search = () => {
 
  const {values, handleChange, handleSubmit} = useProducts()
  
  return (
    <>
    <SearchBarStyled onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Buscador"   
          onChange={handleChange} 
          value={values} 
          name="term" 
        />
      <div>
        <svg><BiSearchAlt2/></svg>
      </div>
    </SearchBarStyled>
    </>
  );
};


