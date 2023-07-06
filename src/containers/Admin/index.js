import React from 'react'
import { Container, ContainerItems } from './styles'
import Orders from './Orders'
import ListProducts from './ListProducts'
import { SideMenuAdmin } from '../../components'
import PropTypes from 'prop-types'
import paths from '../../constants/path'
import NewProduct from './NewProduct'

export function Admin ({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}

      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
