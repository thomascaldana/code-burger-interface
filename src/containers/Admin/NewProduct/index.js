import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'

function NewProduct () {
  useEffect(() => {
    async function loadOrders () {
      const { data } = await api.get('products')
    }
    loadOrders()
  }, [])

  return (
    <Container>
      <div>Ok</div>
    </Container>
  )
}

export default NewProduct
