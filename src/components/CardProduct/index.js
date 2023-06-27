import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { Container, Image, ProductName, ProductPrice, ContainerItems } from '../CardProduct/styles'

function CardProduct ({ product }) {
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

export default CardProduct

CardProduct.propTypes = {
  product: PropTypes.object
}
