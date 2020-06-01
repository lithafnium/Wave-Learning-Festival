import React, { useState, useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Left, FormContainer, Form, Input, Button} from './styles'
import { Container, ContainerInner } from '../../globalStyles'

const Signup = () => {
  return(
      <>
        <Navbar/>
            <Container>
                <ContainerInner>
                    <Left>
                        <h1>Join Wave as a Student or Teacher today!</h1>
                    </Left>
                    <FormContainer>
                        <Form>
                            <h1>Signup</h1>
                            <p>Email Address</p>
                            <Input placeholder="name@email.com"/>

                            <p>Password</p>
                            <Input placeholder="********"/>
                            <p>Re-enter Password</p>
                            <Input placeholder="********"/>
                            <Button>Log in</Button>
                        </Form>
                    </FormContainer>

                </ContainerInner>
            </Container>
        <Footer/>
      </>
  )
}

export default Signup
