import React from 'react'
import { Container, LoginImage, ContainerItens, Label, Input, Button, SignInLink } from '../Login/style'
import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'

function Login () {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens >
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>
        <SignInLink>Não possui conta? <a>Sign Up</a> </SignInLink>

      </ContainerItens>
    </Container>
  )
}

export default Login
