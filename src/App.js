import React, { useEffect } from 'react'
import logo from './logo.svg'
import firebase from 'firebase'
import './App.css'
import About from './pages/About'
import Teachers from './pages/Teachers'
import Team from './pages/Team'
import FAQStudents from './pages/FAQ/Students'
import FAQParents from './pages/FAQ/Parents'
import FAQTeachers from './pages/FAQ/Teachers'
import Courses from './pages/Courses'
import CoursesInProgress from './pages/Courses/CoursesInProgress'
import CoursesArchive from './pages/Courses/CoursesArchive'
import Speakers from './pages/Speakers'
import SpeakerSignUp from './pages/Speakers/SpeakerSignup'

// wave 1
import CourseLearnPython from './pages/Courses_W1/CoursePages/LearnPython'
import CourseHowCancerWorks from './pages/Courses_W1/CoursePages/HowCancerWorks'
import CourseDigitalPainting from './pages/Courses_W1/CoursePages/DigitalPainting'
import CourseAnthropology from './pages/Courses_W1/CoursePages/Anthropology'
import CourseBlockCoding from './pages/Courses_W1/CoursePages/BlockCoding'
import CourseEmotions from './pages/Courses_W1/CoursePages/Emotions'
import CourseExplosives from './pages/Courses_W1/CoursePages/Explosives'
import CourseGeobiology from './pages/Courses_W1/CoursePages/Geobiology'
import CoursePublicTransit from './pages/Courses_W1/CoursePages/PublicTransportation'
import CourseShortStories from './pages/Courses_W1/CoursePages/ShortStories'
import CourseSignLanguage from './pages/Courses_W1/CoursePages/SignLanguage'
import CourseWebDev from './pages/Courses_W1/CoursePages/WebDevelopment'
import CourseWesternMusic from './pages/Courses_W1/CoursePages/WesternMusic'

// wave 2
import CourseCodingActivities from './pages/Courses_W2/CoursePages/CodingActivities'
import CourseFinancialLiteracy from './pages/Courses_W2/CoursePages/FinancialLiteracy'
import CourseGreatSpeeches from './pages/Courses_W2/CoursePages/GreatSpeeches'
import CourseKanyeWest from './pages/Courses_W2/CoursePages/KanyeWest'
import CoursePhysics from './pages/Courses_W2/CoursePages/Physics'
import CourseJoy from './pages/Courses_W2/CoursePages/Joy'
import CourseLaughs from './pages/Courses_W2/CoursePages/ArtOfLaughs'
import CourseContemporaryArt from './pages/Courses_W2/CoursePages/ContemporaryArt'
import CourseButterflies from './pages/Courses_W2/CoursePages/Butterflies'
import CourseIntroCS from './pages/Courses_W2/CoursePages/IntroCS'
import CourseCinema from './pages/Courses_W2/CoursePages/Cinema'
import CourseInvesting from './pages/Courses_W2/CoursePages/Investing'
import CoursePsychology from './pages/Courses_W2/CoursePages/SocialPsychology'
import CourseClimateCrisis from './pages/Courses_W2/CoursePages/TackleClimateCrisis'
import CourseIntroNeuroscience from './pages/Courses_W2/CoursePages/IntroToNeuroscience'
import CoursePoetry from './pages/Courses_W2/CoursePages/PoetrySelfExpression'
import CourseLinksMythologies from './pages/Courses_W2/CoursePages/LinksInMythologies'
import CourseComputerSecurity from './pages/Courses_W2/CoursePages/ComputerSecurity'
import CourseStatisticalMachine from './pages/Courses_W2/CoursePages/StatisticalMachine'
import CourseCoronaAnxiety from './pages/Courses_W2/CoursePages/CoronaAndAnxiety'
import CourseCampaignsElections from './pages/Courses_W2/CoursePages/CampaignsElections'
import CourseGreatNumbers from './pages/Courses_W2/CoursePages/GreatNumbers'
import CourseSignLanguage2 from './pages/Courses_W2/CoursePages/AmericanSignLanguage'
import CourseAIHealthcare from './pages/Courses_W2/CoursePages/AIHealthcare'
import CourseMakingAsian from './pages/Courses_W2/CoursePages/MakingAsian'
import CoursePublicSpeaking from './pages/Courses_W2/CoursePages/PublicSpeaking'

import TermsAndConditions from './pages/Terms/TermsConditions'
import PrivacyPolicy from './pages/Terms/PrivacyPolicy'
import TeacherAgreement from './pages/Terms/TeacherAgreement'
import StudentAgreement from './pages/Terms/StudentAgreement'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Unsubscribe from './pages/Unsubscribe'
import Donate from './pages/Donate'
import Join from './pages/Join'
import Mission from './pages/Mission'
import Blog from './pages/Blog'
import BlogPage from './pages/Blog/BlogPage'
import CourseSignUp from './pages/Courses/CourseSignUp'
import CoursePage from './pages/Courses/CoursePages'
import ChangePassword from './pages/ChangePassword'
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignOut"
import ResetPassword from "./pages/ResetPassword"

import Dashboard from './pages/Dashboard'

import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import { FirebaseProvider } from './firebaseContext'
function App () {
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
            <Route path="/courses-inprogress">
              <CoursesInProgress />
            </Route>
            <Route path="/courses-archive">
              <CoursesArchive />
            </Route>
            <Route path="/join">
              <Join />
            </Route>

            {/* wave 1 */}
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

            {/* wave 2 */}
            <Route path="/course-coding-activities">
              <CourseCodingActivities/>
            </Route>
            <Route path="/course-financial-literacy">
              <CourseFinancialLiteracy/>
            </Route>
            <Route path="/course-great-speeches">
              <CourseGreatSpeeches/>
            </Route>
            <Route path="/course-kanye-west">
              <CourseKanyeWest/>
            </Route>
            <Route path="/course-physics">
              <CoursePhysics/>
            </Route>
            <Route path="/course-joy">
              <CourseJoy/>
            </Route>
            <Route path="/course-laughs">
              <CourseLaughs/>
            </Route>
            <Route path="/course-contemporary-art">
              <CourseContemporaryArt/>
            </Route>
            <Route path="/course-butterflies">
              <CourseButterflies/>
            </Route>
            <Route path="/course-intro-cs">
              <CourseIntroCS/>
            </Route>
            <Route path="/course-cinema">
              <CourseCinema/>
            </Route>
            <Route path="/course-investing">
              <CourseInvesting/>
            </Route>
            <Route path="/course-psychology">
              <CoursePsychology/>
            </Route>
            <Route path="/course-climate-crisis">
              <CourseClimateCrisis/>
            </Route>
            <Route path="/course-intro-neuroscience">
              <CourseIntroNeuroscience/>
            </Route>
            <Route path="/course-poetry">
              <CoursePoetry/>
            </Route>
            <Route path="/course-links-mythologies">
              <CourseLinksMythologies/>
            </Route>
            <Route path="/course-computer-security">
              <CourseComputerSecurity/>
            </Route>
            <Route path="/course-statistical-machine">
              <CourseStatisticalMachine/>
            </Route>
            <Route path="/course-corona-anxiety">
              <CourseCoronaAnxiety/>
            </Route>
            <Route path="/course-campaigns-elections">
              <CourseCampaignsElections/>
            </Route>
            <Route path="/course-great-numbers">
              <CourseGreatNumbers/>
            </Route>
            <Route path="/course-sign-language-2">
              <CourseSignLanguage2/>
            </Route>
            <Route path="/course-ai-in-healthcare">
              <CourseAIHealthcare/>
            </Route>
            <Route path="/course-making-asian">
              <CourseMakingAsian/>
            </Route>
            <Route path="/course-public-speaking">
              <CoursePublicSpeaking/>
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
            <Route path="/student-agreement">
              <StudentAgreement />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/unsubscribe">
              <Unsubscribe />
            </Route>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route path="/mission">
              <Mission />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/speakers">
              <Speakers />
            </Route>
            <Route path="/speaker-sign-up">
              <SpeakerSignUp />
            </Route>
            <Route path="/reset-password">
              <ResetPassword />
            </Route>
            <Route path="/blog/:blogSlug" component={BlogPage} />
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/course-sign-up">
              <CourseSignUp />
            </Route>
            <Route path="/change-password">
              <ChangePassword />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-out">
              <SignOut />
            </Route>
            <Route path="/:slug" component={CoursePage} />

            <Route path="/">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </FirebaseProvider>
  )
}

export default App
