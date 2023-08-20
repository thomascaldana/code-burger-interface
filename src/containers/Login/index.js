import React from 'react'
import { Container, ContainerItens, Label, Input, SignInLink, BeerImgTop, BurguerImgTop, BeerImgDown, BurguerImgDown } from '../Login/style'
import { Button, ErrorMessage } from '../../components'

import api from '../../services/api'
import Logo from '../../assets/logo.svg'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { useUser } from '../../hooks/UserContext'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useHistory } from 'react-router-dom'
import BeerImage from '../../assets/beer.svg'
import BurguerImage from '../../assets/burguer.svg'

export function Login () {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email('digite um e-mail válido').required('o e-mail é obrigatório'),
    password: Yup.string().required('a senha é obrigatória').min(6, 'a senha deve ter pelo menos 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),

      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu e-mail e senha'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 900)
  }

  return (
    <Container>
      <BeerImgTop src={BeerImage} alt='beer' />
      <BurguerImgTop src={BurguerImage} alt='burguer' />
      <BeerImgDown src={BeerImage} alt='beer' />
      <BurguerImgDown src={BurguerImage} alt='burguer' />
      <ContainerItens >
        <img src={Logo} alt="logo" />

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button className='sign-in-button' type="submit">Sign In</Button>
        </form>
        <SignInLink>Não possui conta? <Link to='/cadastro'>Sign Up</Link> </SignInLink>

      </ContainerItens>
    </Container>
  )
}
