import React, { useEffect, useState } from 'react'
import { Container, Label, Input, ButtonStyles } from './styles'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import ReactSelect from 'react-select'
import { useForm } from 'react-hook-form'

function NewProduct () {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    async function loadOrders () {
      const { data } = await api.get('products')
    }
    loadOrders()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type='text' {...register('name')} />

        <Label>Preço</Label>
        <Input type='number' {...register('price')} />

        <Label>Upload da imagem</Label>
        <Input type='file' accept='image/png, image/jpeg' />

        <ReactSelect />

        <ButtonStyles>Adicionar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct
