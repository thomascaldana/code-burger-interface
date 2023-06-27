import React from 'react'
import { ContainerButton } from '../Button/styles'
import PropTypes from 'prop-types'

export function Button ({ children, ...rest }) {
  return (

    <ContainerButton {...rest} >
      {children}
    </ContainerButton >
  )
}

Button.propTypes = {
  children: PropTypes.string
}
