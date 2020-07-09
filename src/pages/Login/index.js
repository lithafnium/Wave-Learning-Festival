import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Left,
  FormContainer,
  Form,
  Input,
  Button,
  ContainerInner
} from './styles'
import { Container } from '@/globalStyles'

const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ContainerInner>
          <Left>
            <h1>Join Wave as a Student or Teacher today!</h1>
          </Left>
          <FormContainer>
            <Form>
              <h1>Log in</h1>
              <p>Don't have an account? Click here to create one.</p>
              <p>Email Address</p>
              <Input placeholder="name@email.com" />

              <p>Password</p>
              <Input placeholder="********" />
              <Button>Log in</Button>
            </Form>
          </FormContainer>
        </ContainerInner>
      </Container>
      <Footer />
    </>
  )
}

export default Login
