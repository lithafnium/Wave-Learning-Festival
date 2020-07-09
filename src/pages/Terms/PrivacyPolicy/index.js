import React from "react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";

const Teachers = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header style={{color: Colors.WLF_PURPLE}}>Privacy Policy</Typography.Header>
          <Typography.BodyText>
            <b>Last Updated: June 30, 2020</b>
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>Introduction:</Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            At WLF we know you care about how your personal information is used
            and shared, and as such we take your privacy very seriously. Below
            you will find our Privacy Policy (the “Policy”), and by using or
            accessing the WLF services in any manner you acknowledge that you
            accept the practices and requirements outlined in this Policy. You
            also hereby consent to our collection, use, and sharing of your
            information in the following ways:
          </Typography.BodyText>
          <Typography.BodyText>
            Note: Unless otherwise indicated, all terms have the same definition
            as in the <a href="terms-conditions">WLF Terms and Conditions</a>.
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            <u>Information That WLF Collects:</u>
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            WLF collects different information depending on whether you use the
            services as a teacher or as a student. As set forth in our{" "}
            <a href="terms-conditions"> Terms and Conditions</a>, WLF requires
            the consent and contact information of a parent or guardian for a
            student to sign up. The Children’s Online Privacy Protection Act of
            1998 and regulations enacted under it by the Federal Trade
            Commission (“COPPA”) require us to obtain verifiable parental
            consent in order to collect, use, and disclose personal information
            of individuals under the age of 13. We do not knowingly collect
            personal information from individuals under 13 years of age without
            parental consent. If we learn we have collected or received personal
            information about an individual under 13 years of age without
            verification of parental consent, we will delete that information.
            If you believe we might have any information from or about an
            individual under 13 years of age, please contact us at{" "}
            <a href="wavelearningfestival@gmail.com">
              wavelearningfestival@gmail.com
            </a>
            .
          </Typography.BodyText>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            Students may turn their cameras on or off during a lesson at their own discretion. Video usage may be encouraged for classes that benefit from participation, such as a public speaking or ASL class.
            Any student who has their webcam on during a class agrees to having
            their picture taken (as part of a class screenshot or other
            photograph) and used by WLF for any purposes pursuant to our goals,
            such as advertising our services on social media or other online
            platforms. Such posts may include pictures of your face and any
            other information visible while using the online learning platform,
            such as your username if using Zoom. Again, if at any time you wish
            to opt out of these pictures, please turn off your webcam and/or
            change your visible username upon entering a class.
          </Typography.BodyText>
          <Typography.BodyText>The information collected for all users is as follows:</Typography.BodyText>
          <ul>
            <li>
              <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>Automatically Collected Information</Typography.Header2>
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                Whenever you interact with our Services, we automatically
                receive and record information from your browser or your device
                that is transmitted as part of standard Internet traffic. This
                includes your IP address, what type of device and browser you’re
                using, the previous page you were on, and the page or feature
                you requested. You may be able to change the preferences on your
                browser or device to prevent or limit your device’s disclosure
                of information, but this may prevent you from taking advantage
                of some of our features.
              </Typography.BodyText>
            </li>
            <li>
              <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>Cookies</Typography.Header2>
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                In order to keep you logged into the Services, WLF may use
                “cookies,” or small files that WLF can send to your browser for
                storage on your device. They make the use of these Services
                easier to navigate by saving preferences, remembering your login
                information, and recalling other aspects of your use of these
                Services. While most browsers allow you to disable cookies, we
                recommend that you leave cookies enabled so as not to interfere
                with the full functionality of these Services.
              </Typography.BodyText>
            </li>
            <li>
              <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>Voluntarily Disclosed Information</Typography.Header2>
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                When you use the Services, you will have the opportunity to
                provide us with some information directly. For example, some
                functions of the Services require you to register for an
                account, where we will ask you for information that may include
                your email address and desired password. We may also collect
                other information you directly give us as you build your teacher
                or student profile or verify your identity on the Services.
              </Typography.BodyText>
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                A very limited portion of the Services allow you to post or
                transmit content (“User Content”). For example, a teacher will
                submit User Content in order to build a profile. You may post
                User Content at your sole discretion, but please note that some
                User Content may be publicly available or viewable to others. Do
                not post any sensitive personal information as User Content.
              </Typography.BodyText>
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                Periodically, WLF may send you surveys regarding the
                functionality, effectiveness, or ease of access of the Services.
                Such responses are voluntary, yet appreciated, however they may
                contain personally identifiable information.
              </Typography.BodyText>
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
              Students may turn their cameras on or off during a lesson at their own discretion. 
              Video usage may be encouraged for classes that benefit from participation, such as a 
              public speaking or ASL class.  Any student who has their webcam on during a class 
              agrees to having their picture taken (as part of a class screenshot or other photograph) 
              and used by WLF for any purposes pursuant to our goals, such as advertising our services 
              on social media or other online platforms. Such posts may include pictures of your face 
              and any other information visible while using the online learning platform, such as your 
              username if using Zoom. Students should also be aware that, unless otherwise stated, 
              courses will be recorded by a Wave team member and uploaded to Youtube through a WLF 
              account. By enrolling in a Wave course, students (and/or  a student’s legal guardian who 
              approved student registration) are consenting to such recordings. These recordings will 
              include both audio and visual material, meaning students’ comments during the course will 
              also be recorded. If at any time you wish to opt out of these pictures and recordings, 
              please turn off your webcam and/or change your visible username upon entering a class. 
              Students or legal guardians may also reach out to WLF to explicitly opt out of any or all recordings. 
              </Typography.BodyText>
            </li>
          </ul>
          <Typography.BodyText>The information collected from students is as follows:</Typography.BodyText>
          <ul>
            <li>
              <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>Information Collected at Registration:</Typography.Header2>
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                As set forth in our Terms of Service, we require the contact
                information of a parent or guardian for each student signing up.
                At registration, WLF collects a parent or guardian’s name and
                email address as an identifier, and requests the user to create
                a password in order to establish a user account. We also collect
                your name, email, hometown, school, and grade.
              </Typography.BodyText>
            </li>
          </ul>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>The information collected from teachers is as follows:</Typography.BodyText>
          <ul>
            <li>
              <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>Information Collected at Registration:</Typography.Header2>
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                At registration, WLF collects your name, email, school, and
                graduation year. Upon approval to teach a course, WLF also
                collects a headshot and a short personal description.
              </Typography.BodyText>
            </li>
          </ul>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            <u>Use of Collected Information</u>
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            WLF uses the information collected as described above to develop and
            maintain the Services, comply with legal obligations, and for any
            purpose for which you provide consent. We may communicate with you
            via email to verify your account, notify you about our privacy
            practices and activity on the Services, inform you of changes to our
            policies and procedures, or to otherwise facilitate the operation of
            the Services.
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            <u>Disclosure of Information</u>
          </Typography.Header2>
          <Typography.BodyText>
            WLF may disclose the information above in the following
            circumstances:
          </Typography.BodyText>
          <ul>
            <li>
              <i>Third-Party Services and Contractors</i> -
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                WLF may employ other companies and people to perform tasks on
                our behalf and, from time to time, may need to share your
                information with them to provide services to you. For example,
                we may use third-party services to host our web application and
                store user data. Any information shared for such purposes will
                be limited and will only include what is needed to provide the
                service, and WLF has worked to confirm that these service
                providers do not disclose information to others except as is
                consistent with this Policy.
              </Typography.BodyText>
            </li>
            <li>
              <i>Public Information</i> -
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                a very limited amount of User Content is made available on the
                Services, including information a teacher provides for their
                profile. Please note that any information you submit in a public
                portion of the site will be viewable by others. Accordingly,
                only include information in such submissions that you are
                comfortable sharing with third parties or the general public.
              </Typography.BodyText>
            </li>
            <li>
              <i>Business Transfers</i> -
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                if WLF is acquired by another association, goes into
                dissolution, or otherwise transfers ownership or assets, WLF may
                transfer the information it has as part of that transaction.
              </Typography.BodyText>
            </li>
            <li>
              <i>Aggregate Usage Information and Analytics</i> -
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                We may de-identify your personal information so that you are not
                identified as an individual and use that information for any
                business purpose, including for analyzing demographic and usage
                information or to help identify new partners and companion
                services
              </Typography.BodyText>
            </li>
            <li>
              <i>Legal Compliance</i> -
              <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
                We reserve the right to access, read, and disclose any
                information that we believe in our sole discretion is necessary
                to comply with law or court order; enforce or apply our Terms of
                Service and other agreements; or protect the rights, property,
                or safety of WLF, our members, our users, or others.
              </Typography.BodyText>
            </li>
          </ul>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            <u>Data Security and Storage</u>
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            WLF recognizes the importance of data security and has implemented
            measures designed to protect the security, integrity, and
            confidentiality of your personal information. We endeavor to protect
            the privacy of your account and other personal information we hold
            in our records and actively work to prevent unauthorized entry or
            use, hardware or software failure, and other factors that could
            potentially compromise security of user information. The safety and
            security of your information also depend on you. Certain parts of
            the Services are protected by a password, and it is your
            responsibility to keep that password confidential.
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            <u>Modification and Deletion of Information</u>
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            You may access, and, in some cases, edit or delete your information
            through your account and profile settings. The information you can
            view, update, and delete may change over time. You may request that
            we delete your account and your data from WLF by contacting us at{" "}
            <a href="wavelearningfestival@gmail.com">
              wavelearningfestival@gmail.com
            </a>
            . Please note that if you request removal of your information you
            may be unable to continue to utilize the Services.
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            <u>Parental Rights Under COPPA</u>
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            WLF does not require a child or a child’s parents or guardians to
            disclose more information about the child than is reasonably
            necessary to participate in any part of the Services, and does not
            share personally identifiable information of a child with third
            parties who are not part of the Services except as provided above
            under “Disclosure of Information”. Parents and guardians, with a
            child or children under the age of 13, have certain rights that
            include the right to:
          </Typography.BodyText>
          <ul>
            <li>Review their child’s personal information collected by WLF;</li>
            <li>
              Request that WLF delete collected information about their child;
            </li>
            <li>
              Request that WLF no longer collect or use information about their
              child;
            </li>
            <li>
              Request that WLF no longer share information about their child
              with third parties that are not part of Services.
            </li>
          </ul>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            Parents may exercise any of these rights listed above by contacting
            WLF at{" "}
            <a href="wavelearningfestival@gmail.com">
              wavelearningfestival@gmail.com
            </a>
            .
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            <u>Changes to the Policy</u>
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            It is our policy to post any changes we make to the Policy on this
            page. If we make material changes to how we treat our users'
            personal information, we will notify you by email to the address
            specified in your account or through a notice on the web-application
            home page. The date the privacy policy was last revised is
            identified at the beginning of this Policy. You are responsible for
            ensuring we have an up-to-date active and deliverable email address
            for you.
          </Typography.BodyText>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            <u>Contact Information</u>
          </Typography.Header2>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            For any inquiries about this privacy policy and our privacy
            practices, contact us at{" "}
            <a href="wavelearningfestival@gmail.com">
              wavelearningfestival@gmail.com
            </a>
            .
          </Typography.BodyText>
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default Teachers;
