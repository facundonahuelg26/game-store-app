import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { GrFormAdd, GrSubtract } from "react-icons/gr";
import { ButtonAddAndSubstract, ContainerButtons, ContainerItem, DeleteButton, ItemTitle, UnitPrice } from "../styled-components/cart";

export const CartItem = ({ item, deleteItemCart, add }) => {
  
  return (
    <ContainerItem>
      <img src={item.image} alt={item.name} />
      <ItemTitle>{item.name}</ItemTitle>
      <ContainerButtons>
      <ButtonAddAndSubstract
        disabled={item.quantity <= 1 ? true : false}
        onClick={() => deleteItemCart(item._id)}
      >
        <svg>
          <GrSubtract />
        </svg>
      </ButtonAddAndSubstract>
      <p>{item.quantity}</p>
      <ButtonAddAndSubstract 
        disabled={item.quantity >= item.stock ? true : false}
        onClick={() => add(item._id)}
      >
        <svg>
          <GrFormAdd />
        </svg>
      </ButtonAddAndSubstract>
      </ContainerButtons>
      <UnitPrice>$ {item.price * item.quantity}</UnitPrice>
      <DeleteButton onClick={() => deleteItemCart(item._id, true)}>
        <svg>
          <BsTrashFill />
        </svg>
      </DeleteButton>
    </ContainerItem>
  );
};


