import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About'
import Teachers from './pages/Teachers'
import Team from './pages/Team'
import FAQStudents from './pages/FAQ/Students'
import FAQParents from './pages/FAQ/Parents'
import FAQTeachers from './pages/FAQ/Teachers'
import Courses from './pages/Courses'
import CourseLearnPython from './pages/Courses/CoursePages/LearnPython'
import CourseHowCancerWorks from './pages/Courses/CoursePages/HowCancerWorks'
import CourseDigitalPainting from './pages/Courses/CoursePages/DigitalPainting'
import Login from './pages/Login'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/teachers">
            <Teachers />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/faq-students">
            <FAQStudents />
          </Route>
          <Route path="/faq-parents">
            <FAQParents />
          </Route>
          <Route path="/faq-teachers">
            <FAQTeachers />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/course-learn-python">
            <CourseLearnPython />
          </Route>
          <Route path="/course-how-cancer-works">
            <CourseHowCancerWorks />
          </Route>
          <Route path="/course-digital-painting-with-photoshop">
            <CourseDigitalPainting />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
