import React from 'react'
import { Container, LoginImage, ContainerItens, Label, Input, Button, SignInLink } from '../Login/style'
import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { useForm, SubmitHandler } from 'react-hook-form'

function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens >
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>email</Label>
          <Input type="email" {...register('email')} />

          <Label>Senha</Label>
          <Input type="password" {...register('password')} />

          <Button type="submit">Sign In</Button>
        </form>
        <SignInLink>Não possui conta? <a>Sign Up</a> </SignInLink>

      </ContainerItens>
    </Container>
  )
}

export default Login
