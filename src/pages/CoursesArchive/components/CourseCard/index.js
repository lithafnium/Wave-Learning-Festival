import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from "@/globalStyles"
import {Colors, Typography} from "@/styles"
import { ListContainer, Card, Header, Title, Teachers, Category, CardCompressed, CardExpanded, CourseImage, CourseInfo } from './styles'
import AnimateHeight from 'react-animate-height'
import WaveLogo from '../../../Blog/wave-learning-logo.png'
const CourseCard = ({ title, teachers, category, color, image, description }) => {
    const [show, toggleShow] = useState(false)
    useEffect(() => {
    })
    return(
        <Card color = {color} onClick = {() => toggleShow(!show)}>
            <CardCompressed >
                <Title show={show}><p>{title}</p></Title>
                <Teachers show={show}>{teachers.map((teacher, index)=> {
                    if(index === teachers.length -1){
                        return <p>{teacher}</p>
                    } else{
                        return <p>{teacher}, </p>
                    }
                })}</Teachers>
            </CardCompressed>
            <AnimateHeight height={show ? 'auto' : 0} duration={80}>
                <CardExpanded>
                    <CourseImage>
                        <img src = {image} alt={WaveLogo} />
                    </CourseImage>
                    <CourseInfo>
                        <h3>Course Description:</h3>
                        <p>{description}</p>
                        <h3>Teachers:</h3>
                        <Teachers>{teachers.map((teacher, index)=> {
                    if(index === teachers.length -1){
                        return <p>{teacher}</p>
                    } else{
                        return <p>{teacher}, </p>
                    }
                })}</Teachers>

                    </CourseInfo>
                    
                </CardExpanded>
            </AnimateHeight>

        </Card>
        
    )
}

export default CourseCard