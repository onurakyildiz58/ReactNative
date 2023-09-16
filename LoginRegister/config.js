import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCQaJvxgMt_Q0yAK_RdOz4iK_hRq-1U5AA",
    authDomain: "auth-95578.firebaseapp.com",
    projectId: "auth-95578",
    storageBucket: "auth-95578.appspot.com",
    messagingSenderId: "247386880545",
    appId: "1:247386880545:web:a431c8f936fcd328690160",
    measurementId: "G-CPPXSZY4NC"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }