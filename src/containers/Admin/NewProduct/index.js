import React, { useEffect, useState } from 'react'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import ReactSelect from 'react-select'
import { useForm } from 'react-hook-form'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

function NewProduct () {
  const [fileName, setFileName] = useState(null)
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

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregue a imagem do produto
            </>
          )}

          <input type='file' id='image-input' accept='image/png, image/jpeg'
            {...register('file')}
            onChange={value => { setFileName(value.target.files[0]?.name) }}
          />
        </LabelUpload>
        <ReactSelect />

        <ButtonStyles>Adicionar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct
