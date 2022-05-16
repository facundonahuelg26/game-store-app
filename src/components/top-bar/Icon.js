import React from 'react'
import {BiGame} from "react-icons/bi"
import { ContainerIcon } from './styled-components/icon'

export const IconGameStore = () => {
  return (
    <ContainerIcon>
      <div>
        <BiGame/>
      </div>
      <p>Game Store</p>
    </ContainerIcon>
  )
}

