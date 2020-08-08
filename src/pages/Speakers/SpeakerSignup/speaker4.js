import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Colors, Typography, Form } from '@/styles'
import * as Styles from './styles'
import Logo from './logo.png'
import firebase from 'firebase'
import { FirebaseContext } from '@/firebaseContext'
import { COUNTRIES, UNITED_STATES, STATES } from './data'

const TITLE = "Lisa Baldwin: The Natural Way to Paint"
const SPEAKERS = ["Lisa Baldwin: The Natural Way to Paint (Pre-Recorded)"]

var inputChanged = function (key, setStudentData) {
  var result = (event) => {
    var value = event.target.value
    if (key == 'name_first' || key == 'name_last') {
      value = value.substring(0, 1).toUpperCase() + value.substring(1)
    }
    setStudentData(prevData => {
      var result = { ...prevData }
      result[key] = value
      return result
    })
  }
  return result
}

const renderMultiOption = ({ key, option, studentData, setStudentData }) => (
  <Form.RadioInputBackground onClick={() => {
    const newData = studentData[key]
    const ix = newData.indexOf(option)
    if (ix >= 0) {
      newData.splice(ix, 1)
    } else {
      newData.push(option)
    }
    setStudentData(prevData => {
      var result = { ...prevData }
      result[key] = newData
      return result
    })
  }}>
    <Form.RadioInputButton many={true} selected={studentData[key].indexOf(option) >= 0}/>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{ height: 40 }}>
        {option === 'Other' &&
          <Form.Input
            value={studentData['other' + key]}
            onChange={event => {
              const value = event.target.value
              setStudentData(prevData => {
                var result = {
                  ...prevData
                }
                result['other' + key] = value
                return result
              })
            }}
          />
        }
      </div>
    </div>
  </Form.RadioInputBackground>
)

const renderSingleOption = ({ other, key, option, studentData, setStudentData }) => (
  <Form.RadioInputBackground onClick={() => {
    setStudentData(prevData => {
      var result = {
        ...prevData
      }
      result[key] = option
      return result
    }
    )
  }}>
    <Form.RadioInputButton many={true} selected={studentData[key] == option}/>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{ height: 40 }}>
        {option === 'Other' &&
          <Form.Input
            value={studentData['other' + key]}
            onChange={event => {
              const value = event.target.value
              setStudentData(prevData => {
                var result = {
                  ...prevData
                }
                result['other' + key] = value
                return result
              })
            }}
          />
        }
      </div>
    </div>
  </Form.RadioInputBackground>
)

const renderOption = ({ option }) => (
  <option value={option}>{option}</option>
)

var fitsRequirements = function (studentData) {
  var result = studentData.name_first != '' &&
    studentData.name_last != '' &&
    studentData.email != '' &&
    studentData.age != '' &&
    studentData.parentName != '' &&
    studentData.parentEmail != '' &&
    studentData.speakers != ''
  return result
}

var emailValidated = function (email) {
  // Based on thouroughly tested regex
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regexEmail.test(String(email.replace(' ', '')))
}

var submit = function (db, studentData, setErrorMessage, setPage) {
  var submission = { ...studentData }
  db.collection('SpeakerRegistrations').add(submission).then(function (ref) {
        firebase.auth().createUserWithEmailAndPassword(submission.email, ref.id).then(function () {
          setPage('complete')
        }).catch(function (error) {
          setPage('complete')
        })
        db.collection('SpeakerRegistrations').doc(ref.id).update({ id: ref.id })
      })
}

var YES_NO = [
  'Yes!',
  'No'
];

var AGE_OPTIONS = [
  "",
  "Under 10",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

var YES = ['Yes']

const Home = (db, setPage, studentData, setStudentData, wrongSubmission, setWrongSubmission, setErrorMessage) => {
  return (
    <>
      <Typography.Header color={Colors.WLF_YELLOW}>
      RSVP for {TITLE}
      </Typography.Header>

      <Typography.Header2 color="white" fontSize="24px">
      Student First Name / Nombre *
      </Typography.Header2>
      <Form.Input
        value={studentData.name_first}
        onChange={inputChanged('name_first', setStudentData)}
      />
      <Typography.Header2 color="white" fontSize="24px">
      Student Last Name / Apellido *
      </Typography.Header2>
      <Form.Input
        value={studentData.name_last}
        onChange={inputChanged('name_last', setStudentData)}
      />

      <Typography.Header2 color="white" fontSize="24px">
      Student Email / Correo electrónico *
      </Typography.Header2>
      <Typography.BodyText color="white">
      If possible, please use a personal email instead of a school email.
      </Typography.BodyText>
      <Form.Input
        value={studentData.email.toLowerCase()}
        onChange={inputChanged('email', setStudentData)}
      />

      <Typography.Header2 color="white" fontSize="24px">
        Age / Edad *
      </Typography.Header2>
      <Typography.BodyText color="white">
        Please check the target audience of each speaker to see if the seminar is right for you!
      </Typography.BodyText>
      <Form.Dropdown
        onChange={inputChanged("age", setStudentData)}
      >
        {AGE_OPTIONS.map((value) => (
          renderOption({option: value})
        ))}
      </Form.Dropdown>

      <Typography.Header2 color="white" fontSize="24px">
      Let me know when registrations for future waves begin! / Notifícame de cursos nuevos! *
      </Typography.Header2>
      {YES_NO.map((value) => (
        renderSingleOption({ key: 'futureWaves', option: value, studentData, setStudentData })
      ))}

      <Typography.Header2 color="white" fontSize="24px">
      Parent/Guardian Name (Full) / Nombre de padre o madre *
      </Typography.Header2>
      <Form.Input
        value={studentData.parentName}
        onChange={inputChanged('parentName', setStudentData)}
      />

      <Typography.Header2 color="white" fontSize="24px">
      Parent/Guardian Email / Correo electrónico de padre o madre *
      </Typography.Header2>
      <Form.Input
        value={studentData.parentEmail}
        onChange={inputChanged('parentEmail', setStudentData)}
      />

      <Typography.Header2 color="white" fontSize="24px">
      Country / País *
      </Typography.Header2>
      <Form.Dropdown
        onChange={inputChanged('country', setStudentData)}
      >
        {COUNTRIES.map((value) => (
          renderOption({ option: value })
        ))}
      </Form.Dropdown>

      <Typography.Header2 color="white" fontSize="24px">
      City *
      </Typography.Header2>
      <Form.Input
        value={studentData.city}
        onChange={inputChanged('city', setStudentData)}
      />

      {studentData.country === UNITED_STATES && <>
        <Typography.Header2 color="white" fontSize="24px">
          State *
        </Typography.Header2>
        <Form.Dropdown
          onChange={inputChanged('state', setStudentData)}
        >
          {STATES.map((value) => (
            renderOption({ option: value })
          ))}
        </Form.Dropdown>
      </>
      }

      <Typography.Header2 color="white" fontSize="24px">
      Confirm that this is the seminar you would like to RSVP for! *
      </Typography.Header2>
      {SPEAKERS.map((value) => (
        renderMultiOption({ key: 'speakers', option: value, studentData, setStudentData })
      ))}

      <Typography.Header2 color="white" fontSize="24px">
      I have read and agree to the <a href="/student-agreement" target="_blank">Student Agreement</a> / He leído y acepto el Acuerdo del estudiante
      </Typography.Header2>
      {YES.map((value) => (
        renderSingleOption({ key: 'studentAgreement', option: value, studentData, setStudentData })
      ))}

      <Typography.Header2 color="white" fontSize="24px">
      I have read and agree to the <a href="/terms-conditions" target="_blank">Terms and Conditions</a>&nbsp;
       and <a href="/privacy-policy" target="_blank">Privacy Policy</a>. / He leído y acepto los <a href="/terms-conditions" target="_blank">Términos y Condiciones</a> y la <a href="/privacy-policy" target="_blank">Política de Privacidad</a>. *
      </Typography.Header2>
      {YES.map((value) => (
        renderSingleOption({ key: 'termsConditions', option: value, studentData, setStudentData })
      ))}

      <Typography.Header2 color="white" fontSize="24px">
      Any comments or questions for the teachers or for the board? / ¿Tiene usted alguna pregunta para los maestros o para nosotros?
      </Typography.Header2>
      <Form.BigInput
        value={studentData.questions}
        onChange={inputChanged('questions', setStudentData)}
      />

      <Typography.BodyText color="white">
      * Required field
      </Typography.BodyText>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Form.Button onClick={(event) => {
          if (fitsRequirements(studentData)) {
            if (emailValidated(studentData.email) &&
              emailValidated(studentData.parentEmail)) {
              event.target.parentNode.removeChild(event.target)
              submit(db, studentData, setErrorMessage, setPage)
            } else {
              setWrongSubmission('Please input a valid email address.')
            }
          } else {
            setWrongSubmission('Please fill out the required fields.')
          }
        }} enabled={fitsRequirements(studentData)}>
          <Typography.Header color="white" fontSize="24px">
          Submit
          </Typography.Header>
        </Form.Button>
      </div>

      {wrongSubmission &&
    <Typography.BodyText color="white">
      {wrongSubmission}
    </Typography.BodyText>}

    </>
  )
}

const Complete = () => {
  return (
    <div>
      <Typography.Header color={Colors.WLF_YELLOW}>Thanks for signing up!</Typography.Header>
      <Typography.BodyText color="white">
      We look forward to seeing you at our speaker seminar(s). <br/>
      Click <a href="/">here</a> to go back to the homepage.
      </Typography.BodyText>
    </div>
  )
}

const Loading = () => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Loading...</Typography.Header>
  )
}

const Error = (errorMessage) => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Error! {errorMessage}</Typography.Header>
  )
}


const CourseSignUp = () => {
  const [page, setPage] = useState('loading')
  const [calledOnce, setCalledOnce] = useState(false)
  const [wrongSubmission, setWrongSubmission] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [studentData, setStudentData] = useState({
    name_first: '',
    name_last: '',
    email: '',
    futureWaves: '',
    age: '',
    parentName: '',
    parentEmail: '',
    country: '',
    city: '',
    state: '',
    studentAgreement: '',
    termsConditions: '',
    notInterested: '',
    speakers: [],
    questions: ''
  })

  const { db } = useContext(FirebaseContext)

  if (db && !calledOnce) {
    setPage('home')
    setCalledOnce(true)
  }

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Navbar />
      <Styles.SignupBackground>
        <div style={{ maxWidth: 800 }}>
          {page === 'home' && Home(db, setPage, studentData, setStudentData, wrongSubmission, setWrongSubmission, setErrorMessage)}
          {page === 'complete' && Complete()}
          {page === 'loading' && Loading()}
          {page === 'error' && Error(errorMessage)}
        </div>
      </Styles.SignupBackground>
      <Styles.LogoBackground src={Logo} alt="logo" style={{
        position: 'absolute',
        width: 300,
        height: 300,
        transform: 'rotate(-35deg)',
        top: '60%',
        left: -100
      }}/>
      <Styles.LogoBackground src={Logo} alt="logo" style={{
        position: 'absolute',
        width: 300,
        height: 300,
        transform: 'rotate(-235deg)',
        top: '20%',
        right: -150
      }}/>
      <Footer />
    </div>
  )
}

export default CourseSignUp
