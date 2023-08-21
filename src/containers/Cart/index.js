import React from 'react'
import HomeLogo from '../../assets/home-logo.jpg'
import { Container, CartImg, Wrapper } from './styles'
import { CartItems, CartResume } from '../../components'

export function Cart () {
  return (
    <Container>
      <CartImg src={HomeLogo} alt='logo do carrinho' />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>

    </Container>
  )
}
