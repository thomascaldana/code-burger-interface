import React from 'react'
import { useUser } from '../../hooks/UserContext'
import { useHistory } from 'react-router-dom'

import listLinks from './menu-list'
import LogoutIcon from '@mui/icons-material/Logout'
import { Container, ItemContainer, ListLink, LogoutContainer } from './styles'

export function SideMenuAdmin () {
  const { logout } = useUser()

  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={true}>
          <item.icon className='icon' />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <LogoutContainer>
        <LogoutIcon style={{ color: '#FFFFFF' }} />
        <ListLink to='/login' onClick={logout} >Sair</ListLink>
      </LogoutContainer>
    </Container>
  )
}
