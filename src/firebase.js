import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD_FPCWLGPnojI4LO9M7OejbFsSbRv59fQ",
    authDomain: "wave-learning-festival.firebaseapp.com",
    databaseURL: "https://wave-learning-festival.firebaseio.com",
    projectId: "wave-learning-festival",
    storageBucket: "wave-learning-festival.appspot.com",
    messagingSenderId: "852638305627",
    appId: "1:852638305627:web:126329087e33fdc68b1e7e",
    measurementId: "G-X8YKSF3752"
}

const firebaseConfig = firebase.initializeApp(config)

export { firebaseConfig as firebaseApp }