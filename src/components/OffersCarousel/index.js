import React, { useEffect, useState } from 'react'
import Offers from '../../assets/offers.png'
import { Container, CategoryImg, ContainerItems, Image, ProductName, ProductPrice, Button } from './styles'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import { useHistory } from 'react-router-dom'

export function OffersCarousel () {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  useEffect(() => {
    async function loadOffers () {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer).map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 650, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Offers} alt='logo das ofertas' />
      <Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints}>
        {
          offers && offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt='foto das ofertas' />
              <ProductName>
                {product.name}
              </ProductName>
              <ProductPrice>
                {product.formatedPrice}
              </ProductPrice>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }
                }>
                Peça agora
              </Button>
            </ContainerItems>
          ))
        }
      </Carousel>
    </Container>
  )
}
