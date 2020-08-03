const functions = require('firebase-functions');
const nodemailer = require('nodemailer')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const accounts = [
    {
        first: "Karly", 
        last: "Hou",
        user: "karly.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Yael", 
        last: "Livneh",
        user: "yael.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Salma", 
        last: "Kamni",
        user: "salma.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Simon", 
        last: "Tao",
        user: "simon.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Kevin", 
        last: "Tan",
        user: "kevin.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Austin", 
        last: "Li",
        user: "austin.wavelf@gmail.com",
        pass: "wlf2020!!!"
    },
    {
        first: "Alain", 
        last: "Saal-Dalma",
        user: "alain.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Amy", 
        last: "Shen",
        user: "amy.wavelf@gmail.com",
        pass: "wlf2020!!"
    },
    {
        first: "Daniela", 
        last: "Shuman",
        user: "daniela.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Jonny", 
        last: "Rogers",
        user: "jonny.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Mark", 
        last: "Pekala",
        user: "mark.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Iris", 
        last: "Su",
        user: "iris.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Nikki", 
        last: "Suzani",
        user: "nikki.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Blen", 
        last: "Kedir",
        user: "blen.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Joshua", 
        last: "Chen",
        user: "joshua.wavelf@gmail.com",
        pass: "wlf2020!!!"
    },
    {
        first: "Sandra", 
        last: "Chiu", 
        user: "sandra.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Chase", 
        last: "Souder",
        user: "chase.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },
    {
        first: "Carter", 
        last: "Martindale", 
        user: "carter.wavelf@gmail.com",
        pass: "wavelf2020!!!"
    },


]

const str_range = (from, to, str) => {
    return from.localeCompare(str) <= 0 && str.localeCompare(to) < 0 
}

const sr = (from, to, email) => {
    return str_range(from, to, email)
}

const getAccount = (lower) => {
    let account 
    if(!isNaN(lower.charAt(0))){
        account = accounts[2]
    } else if(sr('a', 'an', lower)){
        account = accounts[0]
    } else if(sr('an', 'caro', lower)){
        account = accounts[1]
    } else if(sr('caro', 'co', lower)){
        account = accounts[3]
    } else if(sr('co', 'ek', lower)){
        account = accounts[4]
    } else if(sr('ek', 'gr', lower)){
        account = accounts[5]
    } else if(sr('gr', 'iri', lower)){
        account = accounts[6]
    } else if(sr('iri', 'josh', lower)){
        account = accounts[7]
    } else if(sr('josh', 'kt', lower)){
        account = accounts[8]
    } else if(sr('kt', 'lt', lower)){
        account = accounts[9]
    } else if(sr('lt', 'maya', lower)){
        account = accounts[10]
    } else if(sr('maya', 'no', lower)){
        account = accounts[11]
    } else if(sr('no', 'raq', lower)){
        account = accounts[12]
    } else if(sr('raq', 'sar', lower)){
        account = accounts[13]
    } else if(sr('sar', 'sunh', lower)){
        account = accounts[14]
    } else if(sr('sunh', 'ul', lower)){
        account = accounts[15]
    } else if(sr('ul', 'xiao', lower)){
        account = accounts[16]
    } else if(sr('xiao', 'zzzzz', lower)){
        account = accounts[17]
    }
    return account;
}
// const gmailEmail = functions.config().gmail.email
// const gmailPassword = functions.config().gmail.password


exports.sendEmailConfirmation = 
    functions.firestore.document('Newsletter/{docid}').onCreate(
    async (snap, context) => {
        
        const newValue = snap.data()
        const email = newValue.email
        const name = newValue.name
        let lower = email.toLowerCase()
        let account = getAccount(lower)

       
        const { first, last, user, pass } = account
        const mailTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user, 
                pass
            }
        })

        console.log(email)
        console.log(user)
        const mailOptions = {
            from: `${first} from WaveLF <${user}>`,
            to: email,
        }

        mailOptions.subject = "Wave Learning Festival: Thank you for subscribing!"
        mailOptions.text = 
            `Hi ${name}!
            
My name is ${first} and and you'll be getting emails about Wave Learning Festival (new wave updates, course reminders if you are in a class, etc.) from me. We're reaching you through this email because you have either signed up for updates in our website or applied to take a class. Thanks so much for your involvement! This email is being sent to both students and parents.\n
As you can see, we're reaching you through a Gmail account since, as a nonprofit, we are building ourselves from scratch. To make this work, we'll need your help. As soon as you receive this email, could you follow the instructions below? It will ensure that our updates sent to you are safe and aren't sent to spam. \n
    1. First, please add my email as a contact. In Gmail, you can do this by hovering over my icon in this email and clicking "Add to Contacts". In other email services, you can click on contacts and add my email manually. Please let me know if there are any problems! \n
    2. If at any time you wish to unsubscribe, all you need to do is visit www.wavelf.org/unsubscribe and input your email. All updates and potential reminders we send in the future will include this link at the bottom of our emails.\n
Thanks so much! Again, if you have any questions, just reply and let me know! We're excited to have you on board. Stay tuned for our updates!
\n
Best,
${first} ${last}
Wave Learning Festival
            `
        try {
            await mailTransport.sendMail(mailOptions)
            console.log(`New subscription email sent`)
        } catch (error) {
            console.log(error)
        }
    }
)

exports.sendEmailConfirmationSpeakers = 
    functions.firestore.document('SpeakerRegistrations/{docid}').onCreate(
    async (snap, context) => {
        
        const newValue = snap.data()
        const email = newValue.email
        const name = newValue.name_first + ' ' + newValue.name_last
        let lower = email.toLowerCase()
        let account = getAccount(lower)

        const { first, last, user, pass } = account
        const mailTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user, 
                pass
            }
        })

        console.log(email)
        console.log(user)
        const mailOptions = {
            from: `${first} from WaveLF <${user}>`,
            to: email,
        }

        mailOptions.subject = "Wave Learning Festival: Thank you for signing up for our speakers!"
        mailOptions.text = 
            `Hi ${name}!
Thank you for registering for our special speakers!
Because there is limited space available in these speaker events, you will find out a day before the event whether you have secured a spot. Please let us know if you have any questions!

Best,            
${first} ${last}
Wave Learning Festival
            `
        try {
            await mailTransport.sendMail(mailOptions)
            console.log(`New subscription email sent`)
        } catch (error) {
            console.log(error)
        }
    }
)

exports.sendEmailConfirmationStudent = 
    functions.firestore.document('StudentRegistrations/{docid}').onCreate(
    async (snap, context) => {
        
        const newValue = snap.data()
        const email = newValue.email
        const name = newValue.name_first + " " + newValue.name_last
        const parentName = newValue.parentName;
        const parentEmail = newValue.parentEmail;
        let lower = email.toLowerCase()
        let account = getAccount(lower)
        
        const { first, last, user, pass } = account
        const mailTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user, 
                pass
            }
        })

        console.log(email)
        console.log(user)
        const mailOptions = {
            from: `${first} from WaveLF <${user}>`,
            to: email,
        }

        mailOptions.subject = "Wave Learning Festival: Thank you for Registering for Wave 5!"
        mailOptions.text = `
Dear ${name},
Thank you for registering for Wave 5 of Wave Learning Festival--we’re so excited for you to join us!
\nBecause we’re a new and growing non-profit, our email account isn’t always recognized by spam filters. 
To make sure you get all of our updates, please add my email as a contact. In Gmail, you can do this 
by hovering over my icon in this email and clicking "Add to Contacts". In other email services, you can 
click on contacts and add my email manually. Please let us know if there are any problems!
\nRegistration for Wave 5 continues until Wednesday, 8/12. You will be notified of your course acceptances and waitlists on Friday, 8/14. 
\nThanks so much! If you have any questions, just reply and let me know! We’re excited to have you on board.

Best,
${first} ${last}
The Wave Team
`

const mailOptionsParent = {
    from: `${first} from WaveLF <${user}>`,
    to: parentEmail,
}

mailOptionsParent.subject = "Wave Learning Festival: Thank you for Registering your Student for Wave 5!"
mailOptionsParent.text = `
Dear ${parentName},
Thank you for registering for Wave 5 of Wave Learning Festival--we’re so excited for your student to join us!
\nBecause we’re a new and growing non-profit, our email account isn’t always recognized by spam filters. 
To make sure you get all of our updates, please add my email as a contact. In Gmail, you can do this 
by hovering over my icon in this email and clicking "Add to Contacts". In other email services, you can 
click on contacts and add my email manually. Please let us know if there are any problems!
\nRegistration for Wave 5 continues until Wednesday, 8/12. You will be notified of your course acceptances and waitlists on Friday, 8/14.
\nThanks so much! If you have any questions, just reply and let me know! We’re excited to have you on board.

Best,
${first} ${last}
The Wave Team
`
        try {
            await mailTransport.sendMail(mailOptions)
            console.log(`New subscription email sent`)
            await mailTransport.sendMail(mailOptionsParent)
            console.log(`New subscription email sent - Parent`)
        } catch (error) {
            console.log(error)
        }
    }
)
