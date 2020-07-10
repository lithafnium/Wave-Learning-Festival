import React, {useState, useContext} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Colors, Typography, Form } from "@/styles";
import * as Styles from "./styles";
import Logo from "./logo.png"
import firebase from 'firebase'
import { FirebaseContext } from "@/firebaseContext";
import { COUNTRIES, UNITED_STATES, STATES, COURSE_LIST } from "./countries";

var changeKey = function(prevData, key, value) {
  var result = prevData;
  result[key] = value;
  console.log(result);
  return result;
}

var inputChanged = function(key, setStudentData) {

  var result = (event) => {
    const value = event.target.value;
    setStudentData(prevData => {
      var result = {...prevData};
      result[key] = value;
      return result;
    });
  };
  return result;
};

const renderMultiOption = ({key, option, studentData, setStudentData}) => (
  <Form.RadioInputBackground onClick={() => {
    const newData = studentData[key];
    const ix = newData.indexOf(option);
    if (ix >= 0) {
      newData.splice(ix,1);
    } else {
      newData.push(option);
    }
    setStudentData(prevData => {
      var result = {...prevData};
      result[key] = newData;
      return result;
  });
  }}>
    <Form.RadioInputButton many={true} selected={studentData[key].indexOf(option) >= 0}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" &&
          <Form.Input
            value={studentData["other" + key]}
            onChange={event => {
              const value = event.target.value;
              setStudentData(prevData => {
                var result = {
                  ...prevData
                };
                result["other" + key] = value;
                return result;
              });
            }}
          />
        }
      </div>
    </div>
  </Form.RadioInputBackground>
);

const renderSingleOption = ({other, key, option, studentData, setStudentData}) => (
  <Form.RadioInputBackground onClick={() => {
    setStudentData(prevData => {
      var result = {
      ...prevData,
      };
      result[key] = option;
      return result;
    }
  );
  }}>
    <Form.RadioInputButton many={true} selected={studentData[key] == option}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" &&
          <Form.Input
            value={studentData["other" + key]}
            onChange={event => {
              const value = event.target.value;
              setStudentData(prevData => {
                var result = {
                  ...prevData
                };
                result["other" + key] = value;
                return result;
            });
            }}
          />
        }
      </div>
    </div>
  </Form.RadioInputBackground>
);

const renderOption = ({option}) => (
  <option value={option}>{option}</option>
)

var fitsRequirements = function(studentData) {
  var result = studentData.name != "" &&
    studentData.email != "" &&
    studentData.parentName != "" &&
    studentData.parentEmail != "" &&
    studentData.numCourses != "" &&
    studentData.firstCourse != "" &&
    studentData.termsConditions != "" &&
    studentData.notInterested != "" &&
    studentData.pastCourses &&
    studentData.futureWaves != "" &&
    studentData.age != "" &&
    studentData.country != "" &&
    studentData.city != "" &&
    studentData.school != "" &&
    studentData.studentAgreement != "" &&
    studentData.howYouHear != "";
  return result;
};

var submit = function(db, studentData, setErrorMessage, setPage) {
  var submission = {...studentData};
  db.collection("StudentRegistrations").add(submission).then(function(ref) {
    firebase.auth().createUserWithEmailAndPassword(submission.email, ref.id).then(function() {
      setPage("complete")
    }).catch(function(error) {
      db.collection("StudentRegistrations").doc(ref.id).delete();
      setErrorMessage(error.message);
      setPage("error");
    });
  });
};

var PAST_COURSES_OPTIONS = [
  "Yes, in Wave 1!",
  "Yes, in Wave 2!",
  "Yes, in Wave 3!",
  "No"
];

var YES_NO = [
  "Yes!",
  "No"
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

var WAYS_TO_HEAR = [
  "From a school/principal/superintendent",
  "From a news outlet",
  "From a family friend",
  "From a Facebook group",
  "From another social media (Facebook page/Twitter/LinkedIn/etc.)",
  "Sunday Friends",
  "From your company (please enter in \"Other\")",
  "From a teacher",
  "Other"
]

var NUM_COURSES = ["", "1", "2", "3"];

var YES = ["Yes"];

const Home = (db, setPage, studentData, setStudentData, wrongSubmission, setWrongSubmission, setErrorMessage) => {
  return (
    <>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Course Signup
    </Typography.Header>

    <Typography.Header2 color="white" fontSize="24px">
      Student Name (Full) / Nombre y Apellido *
    </Typography.Header2>
    <Form.Input
      value={studentData.name}
      onChange={inputChanged("name", setStudentData)}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Student Email / Correo electrónico *
    </Typography.Header2>
    <Form.Input
      value={studentData.email}
      onChange={inputChanged("email", setStudentData)}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Have you taken courses with us before? *
    </Typography.Header2>
    {PAST_COURSES_OPTIONS.map((value) => (
      renderMultiOption({key: "pastCourses", option: value, studentData, setStudentData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      Let me know when registrations for future waves begin! / Notifícame de cursos nuevos! *
    </Typography.Header2>
    {YES_NO.map((value) => (
      renderSingleOption({key: "futureWaves", option: value, studentData, setStudentData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      Age / Edad *
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("age", setStudentData)}
    >
      {AGE_OPTIONS.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      Parent/Guardian Name (Full) / Nombre de padre o madre *
    </Typography.Header2>
    <Form.Input
      value={studentData.parentName}
      onChange={inputChanged("parentName", setStudentData)}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Parent/Guardian Email / Correo electrónico de padre o madre *
    </Typography.Header2>
    <Form.Input
      value={studentData.parentEmail}
      onChange={inputChanged("parentEmail", setStudentData)}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Country / País *
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("country", setStudentData)}
    >
      {COUNTRIES.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      City *
    </Typography.Header2>
    <Form.Input
      value={studentData.city}
      onChange={inputChanged("city", setStudentData)}
    />

    {studentData.country === UNITED_STATES && <>
        <Typography.Header2 color="white" fontSize="24px">
          State *
        </Typography.Header2>
        <Form.Dropdown
          onChange={inputChanged("state", setStudentData)}
        >
          {STATES.map((value) => (
            renderOption({option: value})
          ))}
        </Form.Dropdown>
        </>
    }

    <Typography.Header2 color="white" fontSize="24px">
      School / Escuela *
    </Typography.Header2>
    <Form.Input
      value={studentData.school}
      onChange={inputChanged("school", setStudentData)}
    />

    <Typography.Header2 color="white" fontSize="24px">
      REGISTER FOR COURSES
    </Typography.Header2>

    <Typography.BodyText color="white">
    PLEASE READ BEFORE CONTINUING:
    </Typography.BodyText>
    <Typography.BodyText color="white">
    Since we are offering more classes, you can register for up to 8 courses this Wave and be enrolled in up to 3!
    </Typography.BodyText>
    <Typography.BodyText color="white">
    Please indicate the amount of courses you would ultimately like to be enrolled in (1-3 courses), and we will do our best to give you that amount. We will enroll you based on your priority ranking of the courses.
    </Typography.BodyText>
    <Typography.BodyText color="white">
    Please keep in mind the target age range, course meeting times, frequency, class sizes, and duration.
    </Typography.BodyText>

    <Typography.Header2 color="white" fontSize="24px">
      How many courses would you like to be enrolled in? *
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("numCourses", setStudentData)}
    >
      {NUM_COURSES.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your first choice course? / ¿Cual es tu primer curso de elección? *
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("firstCourse", setStudentData)}
    >
      {COURSE_LIST.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your second choice course? / ¿Cual es tu segundo curso de elección?
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("secondCourse", setStudentData)}
    >
      {COURSE_LIST.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your third choice course? / ¿Cual es tu tercer curso de elección?
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("thirdCourse", setStudentData)}
    >
      {COURSE_LIST.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your fourth choice course? / ¿Cual es tu cuarto curso de elección?
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("fourthCourse", setStudentData)}
    >
      {COURSE_LIST.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your fifth choice course? / ¿Cual es tu quinto curso de elección?
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("fifthCourse", setStudentData)}
    >
      {COURSE_LIST.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your sixth choice course? / ¿Cual es tu sexto curso de elección?
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("sixthCourse", setStudentData)}
    >
      {COURSE_LIST.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your seventh choice course? / ¿Cual es tu séptimo curso de elección?
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("seventhCourse", setStudentData)}
    >
      {COURSE_LIST.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your eighth choice course? / ¿Cual es tu octavo curso de elección?
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("eigthCourse", setStudentData)}
    >
      {COURSE_LIST.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      I have read and agree to the <a href="/student-agreement" target="_blank">Student Agreement</a> / He leído y acepto el Acuerdo del estudiante
    </Typography.Header2>
    {YES.map((value) => (
      renderSingleOption({key: "studentAgreement", option: value, studentData, setStudentData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      I have read and agree to the <a href="/terms-conditions" target="_blank">Terms and Conditions</a>&nbsp;
       and <a href="/privacy-policy" target="_blank">Privacy Policy</a>. / He leído y acepto los <a href="/terms-conditions" target="_blank">Términos y Condiciones</a> y la <a href="/privacy-policy" target="_blank">Política de Privacidad</a>. *
    </Typography.Header2>
    {YES.map((value) => (
      renderSingleOption({key: "termsConditions", option: value, studentData, setStudentData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      If I am placed in a class and decide I am no longer interested or able to take it, I will let Wave (wavelf.logistics@gmail.com) know at least 24 hours before the class start date. / Si yo recibe un lugar en una clase y decido a no tomarla, voy a notificar a WLF por lo menos 24 horas antes que el día de empezar. *
    </Typography.Header2>
    {YES.map((value) => (
      renderSingleOption({key: "notInterested", option: value, studentData, setStudentData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      How did you hear about us? / ¿Cómo discubrió usted de nosotros? *
    </Typography.Header2>
    {WAYS_TO_HEAR.map((value) => (
      renderMultiOption({key: "howYouHear", option: value, studentData, setStudentData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      Any comments or questions for the teachers or for the board? / ¿Tiene usted alguna pregunta para los maestros o para nosotros?
    </Typography.Header2>
    <Form.BigInput
      value={studentData.questions}
      onChange={inputChanged("questions", setStudentData)}
    />

    <Typography.BodyText color="white">
      * Required field
    </Typography.BodyText>

    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Form.Button onClick={() => {
        if (fitsRequirements(studentData)) {
          submit(db, studentData, setErrorMessage, setPage);
        } else {
          setWrongSubmission(true)
        }
      }}>
        <Typography.Header color="white" fontSize="24px">
          Submit
        </Typography.Header>
      </Form.Button>
    </div>

    {wrongSubmission &&
    <Typography.BodyText color="white">
      Please fill out the required fields.
    </Typography.BodyText>}

    </>
  );
}

const Complete = () => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Thanks for signing up! Click <a href="/">here</a> to go back to the homepage.</Typography.Header>
  );
}

const Loading = () => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Loading...</Typography.Header>
  );
}

const Error = (errorMessage) => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Error! {errorMessage}</Typography.Header>
  )
}

const CourseSignUp = () => {
  const [page, setPage] = useState("loading");
  const [calledOnce, setCalledOnce] = useState(false);
  const [wrongSubmission, setWrongSubmission] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    pastCourses: [],
    futureWaves: "",
    age: "",
    parentName: "",
    parentEmail: "",
    country: "",
    city: "",
    state: "",
    school: "",
    numCourses: "",
    firstCourse: "",
    secondCourse: "",
    thirdCourse: "",
    fourthCourse: "",
    fifthCourse: "",
    sixthCourse: "",
    seventhCourse: "",
    eigthCourse: "",
    studentAgreement: "",
    termsConditions: "",
    notInterested: "",
    howYouHear: [],
    otherhowYouHear: "",
    questions: ""
  })

  const {db} = useContext(FirebaseContext);

  if (db && !calledOnce) {
    setPage("home");
    setCalledOnce(true);
  }

  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      <Navbar />
      <Styles.SignupBackground>
        <div style={{maxWidth: 800}}>
          {page === "home" && Home(db, setPage, studentData, setStudentData, wrongSubmission, setWrongSubmission, setErrorMessage)}
          {page === "complete" && Complete()}
          {page === "loading" && Loading()}
          {page === "error" && Error(errorMessage)}
        </div>
      </Styles.SignupBackground>
      <Styles.LogoBackground src={Logo} alt="logo" style={{
        position: 'absolute',
        width: 300,
        height: 300,
        transform: 'rotate(-35deg)',
        top: '60%',
        left: -100,
      }}/>
      <Styles.LogoBackground src={Logo} alt="logo" style={{
        position: 'absolute',
        width: 300,
        height: 300,
        transform: 'rotate(-235deg)',
        top: '20%',
        right: -150,
      }}/>
      <Footer />
    </div>
  );
};

export default CourseSignUp;
