import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from "@/globalStyles"
import { FirebaseContext } from '../../firebaseContext'
import {Colors, Typography} from "@/styles"
import { ListContainer, Card, Header, Title, Teachers, Category, CardCompressed } from './styles'
import CourseCard from './components/CourseCard'
const CoursesArchive = () => {
    const { db, storage } = useContext(FirebaseContext)
    const [courses, updateCourses] = useState([])
    const [courseImages, updateImages] = useState([])
    const [loading, setLoading] = useState(false)
    const WAVE = 3
    const categories = {
        "tech": "Science and Tech", 
        "aesthetics": "Aesthetics and Culture",
        "history": "History, Society, and Individuals"
    }
    const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]
    
    useEffect(() => {
        if(db) {
            db.collection('fl_content').get().then(function(querySnapshot){
                querySnapshot.forEach(async function(doc) {
                    if (doc.data().schema == "coursePage" && doc.data().wave == WAVE) {
                        db.doc(doc.data().picture[0].path).get().then(async function(picture) {
                            if (picture.exists) {
                                storage.child('flamelink/media/' + picture.data().file).getDownloadURL()
                                .then(function(url) {
                                    updateCourses(courses => [...courses, doc])
                                    updateImages(courseImages => [...courseImages, url])
                                })
                            }
                        })
                    }
                })
                setLoading(true)
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [db, storage])
    if(!loading){
        return (<div>
            <Navbar/>
            <Container>
                <ContainerInner>
                    <p>Loading...</p>
                </ContainerInner>
            </Container>
            <Footer/>
        </div>)
    }
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                    <Typography.Header style={{color: Colors.WLF_PURPLE}}>Wave 3</Typography.Header>
                    <Header>
                        <Title><p>Course Title</p></Title>
                        <Teachers><p>Teachers</p></Teachers>
                    </Header>   
                    <ListContainer>
                        {courses.map((course, index) => {
                            let teachers = []
                            if(course.data().teachers.teacher1Name){
                                teachers.push(course.data().teachers.teacher1Name)
                            } 
                            if(course.data().teachers.teacher2Name){
                                teachers.push(course.data().teachers.teacher2Name)
                            } 
                            if(course.data().teachers.teacher3Name){
                                teachers.push(course.data().teachers.teacher3Name)
                            } 
                            if(course.data().teachers.teacher4Name){
                                teachers.push(course.data().teachers.teacher4Name)
                            } 
                            if(course.data().teachers.teacher5Name){
                                teachers.push(course.data().teachers.teacher5Name)
                            } 
                            if(course.data().teachers.teacher6Name){
                                teachers.push(course.data().teachers.teacher6Name)
                            } 
                            if(course.data().teachers.teacher7Name){
                                teachers.push(course.data().teachers.teacher7Name)
                            } 
                            
                            return(
                                <CourseCard color={colors[index % 4]} 
                                      title = {course.data().courseTitle} 
                                      teachers = {teachers} 
                                      category = {categories[course.data().courseCategory]}
                                      image = {courseImages[index]}
                                      description = {course.data().courseDescription}/>
                            )
                        })}   
                    </ListContainer>
                </ContainerInner>
            </Container>
            <Footer/>
        </div>
    )
}

export default CoursesArchive