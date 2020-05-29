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
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
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
