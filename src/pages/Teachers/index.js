import React, {useState, useContext} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as Styles from "./styles";
import TeacherPic from "./teacher.jpg";
import { Colors, Typography } from "@/styles";
import Logo from "./logo.png"
import { FirebaseContext } from "@/firebaseContext";
import { BodyText } from "@/styles/Typography";

const TeacherHome = ({setPage}) => {
  return (<>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Teachers
    </Typography.Header>
    <Typography.BodyText color="white" fontSize="20px" style={{marginBottom: 30}}>
      Want to share your passions with students worldwide? Apply to be a teacher for Wave Learning Festival!
    </Typography.BodyText>
    <Typography.BodyText color="white" fontSize="20px">
      Wave Learning Festival is an educational platform organized by students at Harvard, Stanford, Northwestern,
      UPenn, Williams, RISD, and SLO in which college students teach free seminars on a variety of topics to middle and high schoolers online.
    </Typography.BodyText>
    <Styles.TestimonialBackground>
      <Styles.TestimonialItem>
        <Styles.TeacherImage src={TeacherPic} />
      </Styles.TestimonialItem>
      <Styles.TestimonialItem style={{alignItems: 'flex-start'}}>
        <Typography.Header color={Colors.WLF_YELLOW} fontSize="28px">
          "I loved teaching and working with all these excited learners!"
        </Typography.Header>
        <Typography.Header color={Colors.WLF_YELLOW} fontSize="28px">
          -Cecilia, wave 1 teacher
        </Typography.Header>
      </Styles.TestimonialItem>
    </Styles.TestimonialBackground>
    <Typography.BodyText color="white" fontSize="20px" style={{marginBottom: 30}}>
      The global pandemic has changed what education and summer
      programs look like, and in some cases, completely shut them down.
      By providing fun and diverse live classes, we hope to help students
      continue learning, stay engaged, and interact with others while stuck
      at home. We also hope to alleviate some of the new burderns that have
      fallen on parents who no longer have summer programs to keep their
      children busy while they work full-time.
    </Typography.BodyText>
    <Typography.BodyText color="white" fontSize="20px">
      Wave is an opportunity to gain valuable teaching and leadership
      experience while sharing your passions with  wide audience. The
      flexibility of the time commitment allows you to volunteer while also
      pursuing other summer experiences. No prior teaching experience is
      required, and you will receive help in making your class come to life!
    </Typography.BodyText>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Styles.Button onClick={() => setPage("teacherData")}>
        <Typography.Header color="white" fontSize="24px">
          Apply Now!
        </Typography.Header>
      </Styles.Button>
      <div style={{flex: 1}} />
    </div>
  </>)
}

const REFERRAL_OPTIONS = [
  "From a Facebook group",
  "From a friend or family member",
  "From a social media page (Facebook page/Twitter/LinkedIn",
  "From a Google search",
  "Other",
];

const renderReferralOption = ({option, teacherData, setTeacherData}) => (
  <Styles.RadioInputBackground onClick={() => {
    const newData = teacherData.referral;
    const ix = newData.indexOf(option);
    if (ix >= 0) {
      newData.splice(ix,1);
    } else {
      newData.push(option);
    }
    setTeacherData(prevData => ({
      ...prevData,
      referral: newData,
    }));
  }}>
    <Styles.RadioInputButton many={true} selected={teacherData.referral.indexOf(option) >= 0}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" && 
          <Styles.Input
            value={teacherData.otherReferral}
            onChange={event => {
              const value = event.target.value;
              setTeacherData(prevData => ({
                ...prevData,
                otherReferral: value,
              }));
            }}
          />
        }
      </div>
    </div>
  </Styles.RadioInputBackground>
);

const TeacherDataInput = ({setPage, teacherData, setTeacherData}) => {
  console.log(teacherData.referral);
  const valid =
    teacherData.name !== "" &&
    teacherData.email !== "" &&
    teacherData.school !== "" &&
    teacherData.gradYear !== "" &&
    teacherData.pronouns !== "" &&
    teacherData.referral.length > 0;
  return (<div style={{width: "100%"}}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Teacher Information
    </Typography.Header>
    <Typography.Header2 color="white" fontSize="24px">
      Name
    </Typography.Header2>
    <Styles.Input 
      value={teacherData.name}
      onChange={event => {
        const value = event.target.value;
        setTeacherData(prevData => ({
          ...prevData,
          name: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Email (.edu preferrable)
    </Typography.Header2>
    <Styles.Input 
      value={teacherData.email}
      onChange={event => {
        const value = event.target.value;
        setTeacherData(prevData => ({
          ...prevData,
          email: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      High School / University
    </Typography.Header2>
    <Styles.Input 
      value={teacherData.school}
      onChange={event => {
        const value = event.target.value;
        setTeacherData(prevData => ({
          ...prevData,
          school: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Graduation Year
    </Typography.Header2>
    <Styles.Input 
      value={teacherData.gradYear}
      onChange={event => {
        const value = event.target.value;
        setTeacherData(prevData => ({
          ...prevData,
          gradYear: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Preferred Gender Pronouns (she/her/hers, he/him/his, they/them,their, etc.)
    </Typography.Header2>
    <Styles.Input 
      value={teacherData.pronouns}
      onChange={event => {
        const value = event.target.value;
        setTeacherData(prevData => ({
          ...prevData,
          pronouns: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      How did you hear about wave?
    </Typography.Header2>
    {REFERRAL_OPTIONS.map((value) => (
      renderReferralOption({option: value, teacherData, setTeacherData})
    ))}
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Styles.Button onClick={() => setPage("home")}>
        <Typography.Header color="white" fontSize="24px">
          Cancel
        </Typography.Header>
      </Styles.Button>
      <div style={{flex: 1}} />
      <Styles.Button onClick={() => setPage("coData")} enabled={valid}>
        <Typography.Header color="white" fontSize="24px">
          Next
        </Typography.Header>
      </Styles.Button>
    </div>
  </div>);
}

const CoDataInput = ({setPage, coData, setCoData}) => {
  const valid =
    (
      coData.name === "" &&
      coData.email === "" &&
      coData.school === "" &&
      coData.gradYear === "" &&
      coData.pronouns === ""
    )
    ||
    (
      coData.name !== "" &&
      coData.email !== "" &&
      coData.school !== "" &&
      coData.gradYear !== "" &&
      coData.pronouns !== ""
    );
  return (<div style={{width: "100%"}}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Co-Teacher Information (Optional)
    </Typography.Header>
    <Typography.Header2 color="white" fontSize="24px">
      Name
    </Typography.Header2>
    <Styles.Input 
      value={coData.name}
      onChange={event => {
        const value = event.target.value;
        setCoData(prevData => ({
          ...prevData,
          name: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Email (.edu preferrable)
    </Typography.Header2>
    <Styles.Input 
      value={coData.email}
      onChange={event => {
        const value = event.target.value;
        setCoData(prevData => ({
          ...prevData,
          email: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      High School / University
    </Typography.Header2>
    <Styles.Input 
      value={coData.school}
      onChange={event => {
        const value = event.target.value;
        setCoData(prevData => ({
          ...prevData,
          school: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Graduation Year
    </Typography.Header2>
    <Styles.Input 
      value={coData.gradYear}
      onChange={event => {
        const value = event.target.value;
        setCoData(prevData => ({
          ...prevData,
          gradYear: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Preferred Gender Pronouns (she/her/hers, he/him/his, they/them,their, etc.)
    </Typography.Header2>
    <Styles.Input 
      value={coData.pronouns}
      onChange={event => {
        const value = event.target.value;
        setCoData(prevData => ({
          ...prevData,
          pronouns: value,
        }));
      }}
    />
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Styles.Button onClick={() => setPage("teacherData")}>
        <Typography.Header color="white" fontSize="24px">
          Back
        </Typography.Header>
      </Styles.Button>
      <div style={{flex: 1}} />
      <Styles.Button onClick={() => setPage("classData")} enabled={valid}>
        <Typography.Header color="white" fontSize="24px">
          Next
        </Typography.Header>
      </Styles.Button>
    </div>
  </div>);
}

const ClassDataInput = ({setPage, classData, setClassData}) => {
  const valid =
    classData.title !== "" &&
    classData.description !== "" &&
    classData.grade !== "" &&
    classData.schedule !== "" &&
    classData.runTime !== "" &&
    classData.times !== "" &&
    classData.qualified !== "";
  return (<div style={{width: "100%"}}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Class Information
    </Typography.Header>
    <Typography.Header2 color="white" fontSize="24px">
      Class Title / Topic
    </Typography.Header2>
    <Styles.Input 
      value={classData.title}
      onChange={event => {
        const value = event.target.value;
        setClassData(prevData => ({
          ...prevData,
          title: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Class Description
    </Typography.Header2>
    <Typography.BodyText color="white">
      What topics will you go over in this course? How do you plan to split the content
      over time? Do students need to have any knowledge/skills going in? How will you 
      engage students?
    </Typography.BodyText>
    <Styles.BigInput 
      value={classData.description}
      onChange={event => {
        const value = event.target.value;
        setClassData(prevData => ({
          ...prevData,
          description: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      What grade range is this class most appropriate for?
    </Typography.Header2>
    <Styles.Input 
      value={classData.grade}
      onChange={event => {
        const value = event.target.value;
        setClassData(prevData => ({
          ...prevData,
          grade: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Schedule
    </Typography.Header2>
    <Typography.BodyText color="white">
      How long would you like this class to last (1 week, 2 weeks, or longer)? 
      How often would you like the class to meet (daily, MWF, etc)?
    </Typography.BodyText>
    <Styles.Input 
      value={classData.schedule}
      onChange={event => {
        const value = event.target.value;
        setClassData(prevData => ({
          ...prevData,
          schedule: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Run Time
    </Typography.Header2>
    <Typography.BodyText color="white">
      How long will each session be (45 min, 1 hour, 90 min, etc)?
      Feel free to make the class as long as you would like, but keep it under 3 hours.
    </Typography.BodyText>
    <Styles.Input 
      value={classData.runTime}
      onChange={event => {
        const value = event.target.value;
        setClassData(prevData => ({
          ...prevData,
          runTime: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      What times of day will you be able to teach your seminar?
    </Typography.Header2>
    <Typography.BodyText color="white">
      Times in EDT, please.
    </Typography.BodyText>
    <Styles.Input 
      value={classData.times}
      onChange={event => {
        const value = event.target.value;
        setClassData(prevData => ({
          ...prevData,
          times: value,
        }));
      }}
    />
    <Typography.Header2 color="white" fontSize="24px">
      Why are you qualified to teach this course?
    </Typography.Header2>
    <Typography.BodyText color="white">
      Relevant topical experience and/or experience teaching/working with youth.
      Flex on us!
    </Typography.BodyText>
    <Styles.Input 
      value={classData.qualified}
      onChange={event => {
        const value = event.target.value;
        setClassData(prevData => ({
          ...prevData,
          qualified: value,
        }));
      }}
    />
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Styles.Button onClick={() => setPage("coData")}>
        <Typography.Header color="white" fontSize="24px">
          Back
        </Typography.Header>
      </Styles.Button>
      <div style={{flex: 1}} />
      <Styles.Button onClick={() => setPage("final")} enabled={valid}>
        <Typography.Header color="white" fontSize="24px">
          Next
        </Typography.Header>
      </Styles.Button>
    </div>
  </div>);
}

const IN_DEMAND_OPTIONS = [
  "Geometry (a longer lasting course)",
  "Algebra (a longer-lasting course)",
  "Trigonometry",
  "Calculus",
  "AP Physics 1",
  "Writing college essays/college applications",
]

const renderInDemandOption = ({option, teacherData, setTeacherData}) => (
  <Styles.RadioInputBackground onClick={() => {
    const newData = teacherData.inDemand;
    const ix = newData.indexOf(option);
    if (ix >= 0) {
      newData.splice(ix,1);
    } else {
      newData.push(option);
    }
    setTeacherData(prevData => ({
      ...prevData,
      inDemand: newData,
    }));
  }}>
    <Styles.RadioInputButton many={true} selected={teacherData.inDemand.indexOf(option) >= 0}/>
    <Typography.BodyText color="white">{option}</Typography.BodyText>
  </Styles.RadioInputBackground>
);

const FinalInput = ({setPage, teacherData, setTeacherData, submit}) => {
  return (<div style={{width: "100%"}}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      More Ways to Engage
    </Typography.Header>
    <Typography.Header2 color="white" fontSize="24px">
      These are our most in-demand courses. Would you be interested in (co-)teaching any of these topics?
    </Typography.Header2>
    {IN_DEMAND_OPTIONS.map((value) => (
      renderInDemandOption({option: value, teacherData, setTeacherData})
    ))}
    <Typography.Header2 color="white" fontSize="24px">
      Thank you so much! Anything to add?
    </Typography.Header2>
    <Styles.Input 
      value={teacherData.comment}
      onChange={event => {
        const value = event.target.value;
        setTeacherData(prevData => ({
          ...prevData,
          comment: value,
        }));
      }}
    />
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Styles.Button onClick={() => setPage("classData")}>
        <Typography.Header color="white" fontSize="24px">
          Back
        </Typography.Header>
      </Styles.Button>
      <div style={{flex: 1}} />
      <Styles.Button onClick={() => {
        submit();
        setPage("thanks");
      }}>
        <Typography.Header color="white" fontSize="24px">
          Submit
        </Typography.Header>
      </Styles.Button>
    </div>
  </div>);
}

const Thanks = ({setPage}) => (
  <>
    <Typography.Header color={Colors.WLF_YELLOW}>You're application to teach has been received.</Typography.Header>
    <Typography.Header2 color="white">Thank you for applying!</Typography.Header2>
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Styles.Button onClick={() => setPage("home")}>
        <Typography.Header color="white" fontSize="24px">
          Back to Teacher Page
        </Typography.Header>
      </Styles.Button>
    </div>
  </>
);

const Teachers = () => {
  const [page, setPage] = useState("home");
  const [teacherData, setTeacherData] = useState({
    name: "",
    email: "",
    school: "",
    gradYear: "",
    pronouns: "",
    inDemand: [],
    referral: [],
    otherReferral: "",
    comment: "",
  });
  const [coData, setCoData] = useState({
    name: "",
    email: "",
    school: "",
    gradYear: "",
    pronouns: "",
  });
  const [classData, setClassData] = useState({
    title: "",
    description: "",
    grade: "",
    schedule: "",
    runTime: "",
    times: "",
    qualified: "",
  });
  const { db } = useContext(FirebaseContext);

  const resetData = () => {
    setTeacherData({
      name: "",
      email: "",
      school: "",
      gradYear: "",
      pronouns: "",
      inDemand: [],
      referral: [],
      otherReferral: "",
      comment: "",
    });
    setCoData({
      name: "",
      email: "",
      school: "",
      gradYear: "",
      pronouns: "",
    });
    setClassData({
      title: "",
      description: "",
      grade: "",
      schedule: "",
      runTime: "",
      times: "",
      qualified: "",
    })
  }

  const submit = () => {
    const newReferral = teacherData.referral;
    if (newReferral.indexOf("Other") > 0) {
      newReferral.referral.push(teacherData.otherReferral);
    }
    db.collection("TeacherApplications")
      .add({
        teacher: {
          comment: teacherData.comment,
          email: teacherData.email,
          gradYear: teacherData.gradYear,
          inDemand: teacherData.inDemand,
          name: teacherData.name,
          pronouns: teacherData.pronouns,
          referral: newReferral,
          school: teacherData.school,
        },
        coteacher: {
          email: coData.email,
          gradYear: coData.gradYear,
          name: coData.name,
          pronouns: coData.pronouns,
          school: coData.school,
        },
        class: {
          description: classData.description,
          grade: classData.grade,
          qualified: classData.qualified,
          runTime: classData.runTime,
          schedule: classData.schedule,
          times: classData.times,
          title: classData.title,
        }
      });
    resetData();
  }

  return (
    <div style={{overflow: 'hidden', position: 'relative'}}>
      <Navbar />
      <Styles.TeacherBackground>
        <div style={{maxWidth: 800}}>
          {page === "home" && TeacherHome({setPage})}
          {page === "teacherData" && TeacherDataInput({setPage, teacherData, setTeacherData})}
          {page === "coData" && CoDataInput({setPage, coData, setCoData})}
          {page === "classData" && ClassDataInput({setPage, classData, setClassData})}
          {page === "final" && FinalInput({setPage, teacherData, setTeacherData, submit})}
          {page === "thanks" && Thanks({setPage})}
        </div>
      </Styles.TeacherBackground>
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

export default Teachers;
