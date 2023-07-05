import React from 'react'
import { Container } from './styles'
import Orders from './Orders'
import { SideMenuAdmin } from '../../components'

export function Admin () {
  return (
    <Container>
      <SideMenuAdmin />
      <Orders />
    </Container>
  )
}
