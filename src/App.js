import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About'
import Teachers from './pages/Teachers'
import Team from './pages/Team'
import FAQStudents from './pages/FAQ/Students'
import FAQParents from './pages/FAQ/Parents'
import FAQTeachers from './pages/FAQ/Teachers'
import Courses from './pages/Courses_W2'
import CourseLearnPython from './pages/Courses_W1/CoursePages_W1/LearnPython'
import CourseHowCancerWorks from './pages/Courses_W1/CoursePages_W1/HowCancerWorks'
import CourseDigitalPainting from './pages/Courses_W1/CoursePages_W1/DigitalPainting'
import CourseJoy from './pages/Courses_W1/CoursePages_W1/Joy'
import CourseAnthropology from './pages/Courses_W1/CoursePages_W1/Anthropology'
import CourseBlockCoding from './pages/Courses_W1/CoursePages_W1/BlockCoding'
import CourseEmotions from './pages/Courses_W1/CoursePages_W1/Emotions'
import CourseExplosives from './pages/Courses_W1/CoursePages_W1/Explosives'
import CourseGeobiology from './pages/Courses_W1/CoursePages_W1/Geobiology'
import CoursePublicTransit from './pages/Courses_W1/CoursePages_W1/PublicTransportation'
import CourseShortStories from './pages/Courses_W1/CoursePages_W1/ShortStories'
import CourseSignLanguage from './pages/Courses_W1/CoursePages_W1/SignLanguage'
import CourseWebDev from './pages/Courses_W1/CoursePages_W1/WebDevelopment'
import CourseWesternMusic from './pages/Courses_W1/CoursePages_W1/WesternMusic'
import TermsAndConditions from './pages/Terms/TermsConditions'
import PrivacyPolicy from './pages/Terms/PrivacyPolicy'
import TeacherAgreement from './pages/Terms/TeacherAgreement'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Unsubscribe from './pages/Unsubscribe'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { FirebaseProvider } from './firebaseContext'

function App() {
  return (
    <FirebaseProvider>
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
            <Route path="/course-digital-painting">
              <CourseDigitalPainting />
            </Route>
            <Route path="/course-joy">
              <CourseJoy />
            </Route>
            <Route path="/course-anthropology">
              <CourseAnthropology />
            </Route>
            <Route path="/course-block-coding">
              <CourseBlockCoding />
            </Route>
            <Route path="/course-emotions">
              <CourseEmotions />
            </Route>
            <Route path="/course-explosives">
              <CourseExplosives />
            </Route>
            <Route path="/course-geobiology-astrobiology">
              <CourseGeobiology />
            </Route>
            <Route path="/course-public-transportation">
              <CoursePublicTransit />
            </Route>
            <Route path="/course-short-stories">
              <CourseShortStories />
            </Route>
            <Route path="/course-web-development">
              <CourseWebDev />
            </Route>
            <Route path="/course-western-music">
              <CourseWesternMusic />
            </Route>
            <Route path="/course-sign-language">
              <CourseSignLanguage />
            </Route>
            <Route path="/terms-conditions">
              <TermsAndConditions />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/teacher-agreement">
              <TeacherAgreement />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/unsubscribe">
              <Unsubscribe />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </FirebaseProvider>
  )
}

export default App;
