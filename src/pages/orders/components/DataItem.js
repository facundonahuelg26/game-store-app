import React from 'react'

export const DataItem = ({item}) => {
  return (
    <div>
        <p><span>Producto: {item.title}</span></p>
        <p><span>Cantidad: {item.quantity} Precio: {item.unit_price}</span></p>
    </div>
  )
}

