import React from 'react'
import { Container, ContainerItems } from './styles'
import Orders from './Orders'
import ListProducts from './ListProducts'
import { SideMenuAdmin } from '../../components'

export function Admin () {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {/*         <Orders /> */}
        <ListProducts />
      </ContainerItems>
    </Container>
  )
}
