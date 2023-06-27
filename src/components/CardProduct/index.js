import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../components'
import { Container, Image, ProductName, ProductPrice, ContainerItems } from '../CardProduct/styles'

export function CardProduct ({ product }) {
  return (
    <Container>
      <Image src={product.url} alt='imagem do produto' />
      <ContainerItems>
        <ProductName>
          {product.name}
        </ProductName>
        <ProductPrice>
          {product.formatedPrice}
        </ProductPrice>
        <Button>Adicionar</Button>
      </ContainerItems>

    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
