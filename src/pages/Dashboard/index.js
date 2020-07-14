import React, {useState, useContext} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import { Colors, Typography } from "@/styles"
import { FirebaseContext } from '../../firebaseContext'
import './styles.css'
import { Column, Text, ProfileItem, Label, Data } from './styles.js';
import 'firebase/firestore'
import firebase from 'firebase'
import $ from 'jquery'
import ReactDOMServer from 'react-dom/server';

import WavyPurple from '../About/assets/wavy_purple.svg';

var namify = function(course) { // please change this later lol
  var teacher1 = course.teacher1Name;
  var teacher2 = course.teacher2Name;
  var teacher3 = course.teacher3Name;

  var result = teacher1;
  if (teacher2 != "") {
    result += ", " + teacher2;
  }
  if (teacher3 != "") {
    result += ", " + teacher3;
  }
  return result;
};

var withdraw = function(student, course, db) {
  if (window.confirm("Are you sure you want to drop \"" + course.courseTitle + "\"?")) {
    db.collection("fl_content").doc(course.id).delete();
  } else {
    // phew
  }
}

var calcDisplay = function(courses, wave, student, db) {
   console.log(courses);
  var result = [];
  for (var i = 0; i < courses.length; i++) {
    var course = courses[i];
    // console.log(course.wave.toString() + "!=" + wave.toString())
    if (course.wave.toString() == wave.toString()) {
      result.push(<div class="course-dash">
        <p>
        <b>Course Name: </b><a href={"/courses/" + course.id}>{course.courseTitle}{course.waitlisted && " (WAITLISTED)"}</a><br/>
        <b>Instructor: </b>{namify(course.teachers)}<br/>
        <b>Dates/Times: </b>{course.classDays + " at " + course.classTime}<br/>
        <b><a href={course.courseDocuments}>Course Documents</a></b><br/>
        <b><a href={course.zoomLink}>Zoom Link</a></b> <br/>
        <input type="button" onClick={() => {withdraw(student, course, db);}} value="Withdraw" />
        </p>
      </div>);
      // console.log("adding course");
    }
  }
  return result;
};

var genFrag = function(label, data) {
  return {
    "label": label,
    "data": data
  };
};

var fragHtml = function(info) {
    return (
    <ProfileItem>
      <Column>
        <Label>{`${info.label} `}</Label>
      </Column>
      <Column>
        <Data>
          <p style={{margin: 5}}>{`${info.data} `}</p>
        </Data>
      </Column>
    </ProfileItem>
    );
};

var genEdit = function(info) {
  return (<p class="profile-item-edit"><b><span class="label">{info.label}</span>: </b> <input class="edit-field" type="text" value={info.data} /><button type="button">Submit</button></p>);
};

var generateStudentInfo = function(student) {
  return [
    genFrag("Name", student.name),
    genFrag("Email", student.email),
    genFrag("Parent Name", student.parentName),
    genFrag("Parent Email", student.parentEmail),
    genFrag("Age", student.age),
    genFrag("School", student.school),
    genFrag("Country", student.country),
    genFrag("City", student.city)
  ];
};

var changing = function(label, data, student) {
  var result = student;
  var fieldName = "nothing";
  if (label === "Name") {
    fieldName = "name";
  } else if (label === "Email") {
    fieldName = "email";
  } else if (label === "Parent Name") {
    fieldName = "parentName";
  } else if (label === "Parent Email") {
    fieldName = "parentEmail";
  } else if (label === "School") {
    fieldName = "school";
  }
  result[fieldName] = data;
  return result;
}

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [calledOnce, setCalledOnce] = useState(false);
    const [isError, setError] = useState(false);
    const [user, setUser] = useState(null);
    const [student, setStudent] = useState(null);
    const [theError, setTheError] = useState(null);
    const [courses, setCourses] = useState([]);
    const {db} = useContext(FirebaseContext);

    if (db && !calledOnce) {
      setCalledOnce(true);
      // console.log("call " + calledOnce);
      firebase.auth().signInWithEmailAndPassword("jsr7@williams.edu", "cheesemaker123").catch(function(error) { // DELETE THIS LATER
          setError(true);
          setTheError(error);
          setLoading(false);
      }).then(function(result) {
        // console.log(result.user.uid);
        setUser(result.user);
        if (result.user) {
          db.collection("students2").where("userID", "==", result.user.uid).get().then(function(snapshot) {
            var students = [];
            snapshot.forEach(function(snap) {
              students.push(snap);
            });
            // console.log(students.length + " " + calledOnce);
            if (students.length > 0) {
              var coursesResult = [];
              setStudent(students[0].data());
              var theStudent = students[0].data();
              db.collection("courseAssignments").where("studentID", "==", theStudent.id).get().then(function(snapshot) {
                var currentlyCounted = 0;
                var courseData = [];
                snapshot.forEach(function(snap) {
                  courseData.push(snap.data());
                });
                var numCourses = courseData.length;
                if (numCourses >= 0) {
                  setLoading(false);
                }
                // console.log("hello " + snap.data().course);
                console.log("num: " + numCourses);
                var currentNum = 0;
                for (var i = 0; i < numCourses; i++) {
                  var current = courseData[i];
                  var courseId = current.courseID;
                  var isWaitlisted = current.waitlisted;
                  db.collection("fl_content").where("id", "==", courseId).get().then(function(snapshot) {
                    currentNum++;
                    var courses = [];
                    snapshot.forEach(function(snap) {
                      courses.push(snap);
                    });
                    var toPush = courses[0].data();
                    toPush.waitlisted = isWaitlisted;
                    coursesResult.push(toPush);
                    if (numCourses == currentNum) {
                      setCourses(coursesResult);
                      setLoading(false);
                    }
                  });
                }
                console.log(courses);
              });
            }
          });
        } else {
          setLoading(false);
        }
      });
    }

    /*
      if (loading) {
        return (
          <>
          <Navbar/>
          <Container>
          <ContainerInner>
              <p>
                Loading...
              </p>
          </ContainerInner>
          </Container>
          <Footer/>
          </>
        );
      }
      */

      if (isError) {
        return (
          <>
            <Navbar/>
            <Container>
            <ContainerInner>
            <p>Error. Code: {theError.code}</p>
            <p>Error Message: {theError.message}</p>
            </ContainerInner>
            </Container>

            <Footer/>
          </>);
      }

      if (loading) {
        return (
          <>
            <Navbar/>
            <Container>
            <ContainerInner>
            <p>Loading database...</p>
            </ContainerInner>
            </Container>

            <Footer/>
          </>);

      }

      if (!user) {
        return (
          <>
            <Navbar/>
            <Container>
            <ContainerInner>
            <p>Not signed in.</p>
            </ContainerInner>
            </Container>

            <Footer/>
          </>);

      }

      var currentWave = 4;
      if (student) {
        var toDisplay = calcDisplay(courses, currentWave, student, db);
        var classes = (<select defaultValue="4" name="wave" id="wave">
          <option value="4">Wave 4</option>
          <option value="3">Wave 3</option>
          <option value="2">Wave 2</option>
          <option value="1">Wave 1</option>
        </select>);
        var studentInfo = generateStudentInfo(student);

        $(document).ready(function() {
          // document.getElementById("wave").dispatchEvent(new Event("change", {bubbles: true}));
          $(document).on('change', "#wave", function(e) {
            var newWave = e.target.value;
            // console.log("new wave: " + newWave);
            toDisplay = calcDisplay(courses, newWave);
            // console.log(toDisplay);
            document.getElementById("list-of-courses").innerHTML = ReactDOMServer.renderToString(toDisplay);
          });
          $(document).on("click", ".profile-item button", function(e) {
            var label = $(this).parent().find(".label").html();
            var data = $(this).parent().find(".data").html();
            $(this).parent().after(ReactDOMServer.renderToString(genEdit({"label": label, "data": data})));
            var editing = $(this).parent().next();
            // console.log(editing.find("*"));
            editing.find(".edit-field").focus();
            editing.find(".edit-field").select();
            $(this).parent().remove();
          });
          $(document).on("click", ".profile-item-edit button", function(e) {
            var label = $(this).parent().find(".label").html();
            var newData = $(this).parent().find(".edit-field").val();
            var change = changing(label, newData, student);
            // console.log(change);
            db.doc('students2/' + student.id).set(change);
            $(this).parent().after(ReactDOMServer.renderToString(fragHtml({"label": label, "data": newData})));
            $(this).parent().remove();
          });
          // console.log("hi");
        });

        return (<>
          <div>
            <Navbar/>
              <Container>
              <ContainerInner>
              <div style={{display: "flex", height: "100%"}}>
                <Column>
                  <Typography.Header style={{color: Colors.WLF_PURPLE}}>My Profile</Typography.Header>
                  <div style={{backgroundImage: `url(${WavyPurple})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              height: "80%"}}>
                    <Text>
                      <br/>
                      <br/>
                      {studentInfo.map(fragHtml)}
                    </Text>
                  </div>
                </Column>
                <Column>
                <Typography.Header style={{color: Colors.WLF_PURPLE}}>My Classes</Typography.Header>
                  {classes}

                  <div class="row-dash" id="list-of-courses">
                    {toDisplay}
                  </div>
                </Column>
              </div>
              </ContainerInner>
              </Container>
            <Footer/>
          </div>
        </>);
        }

        return (
          <>
            <Navbar/>
            <Container>
            <ContainerInner>
            <p>Loading information for {user.email}...</p>
            </ContainerInner>
            </Container>

            <Footer/>
          </>);

}

export default Dashboard
