import React from 'react'
import { Container, LoginImage, ContainerItens, Label, Input, SignInLink, ErrorMessage } from '../Login/style'
import Button from '../../components/button'

import api from '../../services/api'
import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from 'yup'

import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'

function Login () {
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
    const response = await toast.promise(
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
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
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

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>Sign In</Button>
        </form>
        <SignInLink>Não possui conta? <a>Sign Up</a> </SignInLink>

      </ContainerItens>
    </Container>
  )
}

export default Login
