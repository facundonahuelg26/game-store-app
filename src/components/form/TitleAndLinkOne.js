import React from 'react'
import { Link } from 'react-router-dom'
import { GoHome } from '../../styled-components'

export const TitleAndLinkOne = ({condition, myText, title, route}) => {
  return (
    <>
        <h1>{title}</h1>
          {condition ? (
            <GoHome>
              <span>{myText}</span>
            </GoHome>
          ) : (
            <GoHome>
              <Link to={route}>{myText}</Link>
            </GoHome>
          )}
    </>
  )
}

