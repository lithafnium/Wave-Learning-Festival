import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "./styles.js"
import './styles.css'

const Dashboard = () => {
    return(
        <div>
            <Navbar/>

            <h1>Profile</h1>
            <p><a href="/dashboard/edit-profile">Edit</a></p>
            <p><b>Name: </b>Jonny Rogers</p>
            <p><b>Email: </b>jsr7@williams.edu</p>
            <p><b>Phone: </b>6502836176</p>
            <p><b>Parent's Email: </b>parentemail@parentdomain.com</p>
            <p><b>Parent's Phone: </b>6502983233</p>
            <p><b>School: </b>Williams College</p>
            <p><b>Location: </b>123 Main Street, United States, Palo Alto, CA 94306</p>

            <Footer/>
        </div>
    )
}

export default Dashboard
