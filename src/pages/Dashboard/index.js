import React, {useState, useContext} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import {FirebaseContext} from '../../firebaseContext'
import './styles.css'
import 'firebase/firestore'
import firebase from 'firebase'

const Dashboard = () => {
    // const [loading, setLoading] = useState(true);
    const db = useContext(FirebaseContext);
    var toReturn;
    firebase.auth().signInWithEmailAndPassword("jsr7@williams.edu", "cheesemaker123").catch(function(error) { // DELETE THIS LATER
        toReturn =
          <>
            <Navbar/>
            <Container>
            <ContainerInner>
            <p>Error. Code: {error.code}</p>
            <p>Error Message: {error.message}</p>
            </ContainerInner>
            </Container>

            <Footer/>
          </>;
    }).then(function(result) {
      var user = result.user;

      if (!user) {
        toReturn =
          <>
            <Navbar/>
            <Container>
            <ContainerInner>
            <p>Not signed in.</p>
            </ContainerInner>
            </Container>

            <Footer/>
          </>;
        return;

      }

      db.collection("students2").where("userID", "==", user.uid).get().then(function(snapshot) {
        var student = snapshot[0].data();
        toReturn = <>
            <div>
                <Navbar/>
                <Container>
                <ContainerInner>

                <h1>Profile</h1>
                <p><a href="/dashboard/edit-profile">Edit</a></p>
                <p><b>Name: </b>{student.name}</p>
                <p><b>Email: </b>{student.email}</p>
                <p><b>Parent Name: </b>{student.parentName}</p>
                <p><b>Parent Email: </b>{student.parentEmail}</p>
                <p><b>School: </b>{student.school}</p>

                <br/><br/>
                <h1>Classes</h1>
                <select name="wave" id="wave">
                  <option value="wave2" selected="selected">Wave 2</option>
                  <option value="wave1">Wave 1</option>
                </select>
                <div class="row">
                  <div class="course">
                    <p>
                    <b>Course Name: </b><a href="/course-learn-python">Learn Python</a><br/>
                    <b>Instructor: </b>Fatima-Zahra Chriha<br/>
                    <b>Instructor Location: </b>Lodi, NJ, USA<br/>
                    <b><a href="about:blank">Course Documents</a></b><br/>
                    <b><a href="about:blank">Zoom Link</a></b>
                    </p>
                  </div>
                  <div class="course">
                    <p>
                    <b>Course Name: </b><a href="/course-learn-python">Learn Python</a><br/>
                    <b>Instructor: </b>Fatima-Zahra Chriha<br/>
                    <b>Instructor Location: </b>Lodi, NJ, USA<br/>
                    <b><a href="about:blank">Course Documents</a></b><br/>
                    <b><a href="about:blank">Zoom Link</a></b>
                    </p>
                  </div>
                  <div class="course">
                    <p>
                    <b>Course Name: </b><a href="/course-learn-python">Learn Python</a><br/>
                    <b>Instructor: </b>Fatima-Zahra Chriha<br/>
                    <b>Instructor Location: </b>Lodi, NJ, USA<br/>
                    <b><a href="about:blank">Course Documents</a></b><br/>
                    <b><a href="about:blank">Zoom Link</a></b>
                    </p>
                  </div>
                  <div class="course">
                    <p>
                    <b>Course Name: </b><a href="/course-learn-python">Learn Python</a><br/>
                    <b>Instructor: </b>Fatima-Zahra Chriha<br/>
                    <b>Instructor Location: </b>Lodi, NJ, USA<br/>
                    <b><a href="about:blank">Course Documents</a></b><br/>
                    <b><a href="about:blank">Zoom Link</a></b>
                    </p>
                  </div>
                  <div class="course">
                    <p>
                    <b>Course Name: </b><a href="/course-learn-python">Learn Python</a><br/>
                    <b>Instructor: </b>Fatima-Zahra Chriha<br/>
                    <b>Instructor Location: </b>Lodi, NJ, USA<br/>
                    <b><a href="about:blank">Course Documents</a></b><br/>
                    <b><a href="about:blank">Zoom Link</a></b>
                    </p>
                  </div>
                  <div class="course">
                    <p>
                    <b>Course Name: </b><a href="/course-learn-python">Learn Python</a><br/>
                    <b>Instructor: </b>Fatima-Zahra Chriha<br/>
                    <b>Instructor Location: </b>Lodi, NJ, USA<br/>
                    <b><a href="about:blank">Course Documents</a></b><br/>
                    <b><a href="about:blank">Zoom Link</a></b>
                    </p>
                  </div>
                  <div class="course">
                    <p>
                    <b>Course Name: </b><a href="/course-learn-python">Learn Python</a><br/>
                    <b>Instructor: </b>Fatima-Zahra Chriha<br/>
                    <b>Instructor Location: </b>Lodi, NJ, USA<br/>
                    <b><a href="about:blank">Course Documents</a></b><br/>
                    <b><a href="about:blank">Zoom Link</a></b>
                    </p>
                  </div>
                </div>

                </ContainerInner>
                </Container>

                <Footer/>
            </div>
            </>;
            return;
      });
    });

    return toReturn;


}

export default Dashboard
