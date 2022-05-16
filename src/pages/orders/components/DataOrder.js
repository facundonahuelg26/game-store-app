import React from 'react'
import { DataItem } from './DataItem'

export const DataOrder = ({address, amount, height, city, state, items, paymentStatus, shippingPrice}) => {
  return (
    <div>
        {
            items.map(item => (
                <DataItem key={item.id} item={item} />
            ))
        }
        <p><span>Dirección: {address}</span> <span>Altura: {height}</span></p>
        <p><span>Provincia: {state}</span> <span>Ciudad: {city}</span></p>
        <p><span>Pago: {paymentStatus ? 'Aprobado' : 'Rechazado'}</span></p>
            <p><span>Costo de envio: {shippingPrice}</span><span>Total: {amount}</span></p>
    </div>
  )
}

