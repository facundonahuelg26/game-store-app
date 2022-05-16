import React  from "react";
import { ItemProduct } from "./ItemProduct";
import { ContainerCardProd } from "../styled-components";

export const CardProduct = ({ list,  add, cart}) => {

  return (
    <ContainerCardProd>
      {list.length < 1 
        ?  <p>No se encontro ningun resultado</p> 
        : list.map(({ _id, image, name, price, stock }) => (
          <ItemProduct
            key={_id}
            image={image}
            name={name}
            price={price}
            add={add}
            id={_id}
            stock={stock}
            cart={cart}
          />
        ))
             
      }
    </ContainerCardProd>
  );
};
