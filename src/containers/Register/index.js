import React from 'react'
import { Container, RegisterImage, ContainerItens, Label, Input, SignInLink, ErrorMessage } from '../Register/style'
import Button from '../../components/Button'

import api from '../../services/api'
import RegisterImg from '../../assets/register-image.svg'
import Logo from '../../assets/logo.svg'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

function Register () {
  const schema = Yup.object().shape({
    name: Yup.string('o nome não pode conter números').required('o nome é obrigatório'),
    email: Yup.string().email('digite um e-mail válido').required('o e-mail é obrigatório'),
    password: Yup.string().required('a senha é obrigatória').min(6, 'a senha deve ter pelo menos 6 dígitos'),
    confirmPassword: Yup.string().required('a confirmação da senha é obrigatória').oneOf([Yup.ref('password')], 'As senhas não coincidem')

  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      }, { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Registrado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça o login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }
  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-image" />
      <ContainerItens >
        <img src={Logo} alt="logo" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message} >Nome</Label>
          <Input type="text" {...register('name')} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message} >Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message} >Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message} >Confirmar Senha</Label>
          <Input type="password" {...register('confirmPassword')} error={errors.confirmPassword?.message} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>Sign Up</Button>
        </form>
        <SignInLink>Já possui conta? <Link to='/login'>Sign In</Link> </SignInLink>

      </ContainerItens>
    </Container >
  )
}

export default Register
