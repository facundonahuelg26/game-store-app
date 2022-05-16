import React from 'react'
import { routes } from '../../../router'
import { MissingData, UploadedData } from '../styled-components/cart'
import { ImCross } from "react-icons/im";
import { LinkShippingData as Link } from "../styled-components/cart";
import { BsFillCalendar2CheckFill, BsArrowLeftSquareFill } from "react-icons/bs";


export const Data = ({isAuth, shippingData}) => {
  return (
    <>
        {
          !isAuth ? null
          :  shippingData === null ?( <p>Cargando...</p>)


          :(!shippingData.yourData  
           
          ? <UploadedData>Datos de envio cargados <svg><BsFillCalendar2CheckFill/></svg></UploadedData>
          : <>
              <MissingData>{shippingData.yourData} <svg><ImCross/></svg></MissingData>
              <Link to={routes.shipping}>Registrar datos de envio <svg><BsArrowLeftSquareFill/></svg> </Link>
            </>)
        }
    </>
  )
}

