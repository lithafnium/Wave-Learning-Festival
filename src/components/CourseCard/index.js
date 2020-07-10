import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from "@/globalStyles"
import {Colors, Typography} from "@/styles"
import { ListContainer, Card, Header, Title, Teachers, Category, CardCompressed, CardExpanded, CourseImage, CourseInfo, Heading, HeaderP, Button, HeadingCompressed} from './styles'
import AnimateHeight from 'react-animate-height'
import WaveLogo from '../../pages/Blog/wave-learning-logo.png'
const CourseCard = ({ title, teachers, category, color, image, description, classDates, classDays, time, targetAudience, courseId, archive }) => {
    const [show, toggleShow] = useState(false)
    useEffect(() => {
    })
    return(
        <Card color = {color} onClick = {() => toggleShow(!show)}>
            <CardCompressed >
                <Title show={show}><p>{title}</p></Title>
                
                {archive && <Teachers show={show}>{teachers.map((teacher, index)=> {
                    if(index === teachers.length -1){
                        return <p>{teacher}</p>
                    } else{
                        return <p>{teacher}, </p>
                    }
                })}</Teachers>}
                {classDates && <HeadingCompressed show = {show}><p> {classDates}</p></HeadingCompressed>}


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
                        })}
                        </Teachers>
                        {targetAudience && <Heading><HeaderP >Target Audience: </HeaderP> <p> {targetAudience}</p></Heading>}
                        {classDates && <Heading><HeaderP>Class Dates: </HeaderP> <p> {classDates}</p></Heading>}
                        {classDays && <Heading><HeaderP>Class Days: </HeaderP> <p> {classDays}</p></Heading>}
                        {time && <Heading><HeaderP>Class Time: </HeaderP><p> {time}</p></Heading>}
                        <Button onClick={() => window.open(`/${courseId}`, "_blank")} color = {color}>Learn More</Button>
                    </CourseInfo>
                </CardExpanded>
            </AnimateHeight>

        </Card>
        
    )
}

export default CourseCard