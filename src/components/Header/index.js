import React from 'react'

import { useUser } from '../../hooks/UserContext'
import { useHistory } from 'react-router-dom'
import Person from '../../assets/person.svg'
import Cart from '../../assets/cart.svg'
import { Container, ContainerLeft, PageLink, ContainerText, ContainerRight, Line, PageLinkExit } from './styles'

export function Header () {
  const { logout, userData } = useUser()
  const { push, location: { pathname } } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

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
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>

        </ContainerText>
      </ContainerRight>

    </Container>
  )
}
