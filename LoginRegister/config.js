import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA47aPlshAHXJx2FvIUxT3b3MfZ0DnX0U4",
    authDomain: "loginregisterrn-d0d49.firebaseapp.com",
    projectId: "loginregisterrn-d0d49",
    storageBucket: "loginregisterrn-d0d49.appspot.com",
    messagingSenderId: "350183077890",
    appId: "1:350183077890:web:54e2acefda72ed586b0f1b",
    measurementId: "G-4CN7N85QZK"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }