import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from "../../../globalStyles"
import './styles.css'

const EditProfile = () => {
    return(
        <div>
            <Navbar/>
            <Container>
            <ContainerInner>

            <h1>Edit Profile</h1>
            <p><b>Name: </b>Jonny Rogers</p>
            <p><b>Email: </b>jsr7@williams.edu</p>
            <p><b>Phone: </b>6502836176</p>
            <p><b>Parent's Email: </b>parentemail@parentdomain.domainname</p>
            <p><b>Parent's Phone: </b>6502983233</p>
            <p><b>School: </b>Williams College</p>
            <p><b>Country: </b>United States</p>
            <p><b>Address: </b>123 Main Street, Palo Alto, CA 94306</p>

            <form>

              <label for="name"><b>Name: </b></label>
              <input type="text" id="name" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="email" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="phone" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="parent-email" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="parent-phone" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="school" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="country" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="address" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="city" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="state/providence" name="name"></input><br/>
              <label for="name"><b>Name: </b></label>
              <input type="text" id="zipcode" name="name"></input><br/><br/>

              <input type="submit" value="Submit" />

            </form>

            </ContainerInner>
            </Container>

            <Footer/>
        </div>
    )
}

export default EditProfile
