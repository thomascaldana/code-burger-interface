import React from 'react'
import HomeLogo from '../../assets/home-logo.jpg'
import { Container, HomeImg } from './styles'
import { CategoryCarousel, OffersCarousel } from '../../components'

export function Home () {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt='logo da home' />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
