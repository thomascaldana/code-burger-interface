import React, { useEffect, useState } from 'react'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import ReactSelect from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '../../../components/ErrorMessage'

function NewProduct () {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed().test('required', 'Carregue um arquivo', value => {
      return value?.length > 0
    })
      .test('fileSize', 'Carregue arquivos de até 2mb', value => {
        return value[0]?.size <= 200000
      })
      .test('type', 'Carregue apenas arquivos JPEG', value => {
        return ((value[0]?.type === 'image/jpeg') ||
          (value[0]?.type === 'image/png')
        )
      })
  })

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type='text' {...register('name')} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input type='number' {...register('price')} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

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
        <ErrorMessage>{errors.file?.message}</ErrorMessage>

        <Controller
          name='category'
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder='Categoria (selecione)'
              />
            )
          }}

        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <ButtonStyles>Adicionar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct
