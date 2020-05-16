import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDcpddvUsUaCkmYVLAPcRukaGUHNokOOBY",
    authDomain: "e-commerce-db-4824a.firebaseapp.com",
    databaseURL: "https://e-commerce-db-4824a.firebaseio.com",
    projectId: "e-commerce-db-4824a",
    storageBucket: "e-commerce-db-4824a.appspot.com",
    messagingSenderId: "782192992179",
    appId: "1:782192992179:web:19ef2f6157b58627f3b5c6",
    measurementId: "G-8B85S52VZ2"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase