import React, { useContext, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  FormContainer,
  Form,
  Input,
  Button,
  ContainerInner
} from './styles'
import { Container } from '@/globalStyles'
import { FirebaseContext } from '@/firebaseContext'

const Login = () => {
  const { auth } = useContext(FirebaseContext)
  useEffect(() => {
    console.log(auth)
  }, [auth])
  return (
    <>
      <Navbar />
      <Container>
        <ContainerInner>
          <FormContainer>
            <Form>
              <h1>Log in</h1>
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
