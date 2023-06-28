import React from 'react'
import { Container, Header, Body, EmptyCart } from './styles'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'

export function CartItems () {
  const { cartProducts } = useCart()
  console.log(cartProducts)
  return (
    <Container>
      <Header>
        <p></p>
        <p>Items</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0
        ? cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
        : (<EmptyCart>Carrinho vazio</EmptyCart>)
      }

    </Container>

  )
}
