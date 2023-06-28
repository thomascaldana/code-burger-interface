import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../components'
import { Container, Image, ProductName, ProductPrice, ContainerItems } from '../CardProduct/styles'
import { useCart } from '../../hooks/CartContext'

export function CardProduct ({ product }) {
  const { putProductInCart } = useCart()
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
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </ContainerItems>

    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
