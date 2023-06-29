import React from 'react'
import { useHistory } from 'react-router-dom'
import Person from '../../assets/person.svg'
import Cart from '../../assets/cart.svg'
import { Container, ContainerLeft, PageLink, ContainerText, ContainerRight, Line, PageLinkExit } from './styles'

export function Header () {
  const { push, location: { pathname } } = useHistory()

  console.log(pathname)
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'} >Home</PageLink>
        <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>Ver produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} alt='carrinho' className='cart-icon' onClick={() => push('/carrinho')} />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt='logo-pessoa' />
        </PageLink>
        <ContainerText>
          <p>Olá, Thomás</p>
          <PageLinkExit>Sair</PageLinkExit>

        </ContainerText>
      </ContainerRight>

    </Container>
  )
}
