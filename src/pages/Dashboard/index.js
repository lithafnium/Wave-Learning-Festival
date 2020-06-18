import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import {FirebaseContext} from '../../firebaseContext'
import './styles.css'

const Dashboard = () => {
    const db = useContext(FirebaseContext);
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);

    return(
        <div>
            <Navbar/>
            <Container>
            <ContainerInner>

            <h1>Profile</h1>
            <p><a href="/dashboard/edit-profile">Edit</a></p>
            <p><b>Name: </b>Jonny Rogers</p>
            <p><b>Email: </b>jsr7@williams.edu</p>
            <p><b>Phone: </b>6502836176</p>
            <p><b>Parent's Email: </b>parentemail@parentdomain.domainname</p>
            <p><b>Parent's Phone: </b>6502983233</p>
            <p><b>School: </b>Williams College</p>
            <p><b>Country: </b>United States</p>
            <p><b>Address: </b>123 Main Street, Palo Alto, CA 94306</p>

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
    );
}

export default Dashboard
