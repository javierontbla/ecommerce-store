import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDcpddvUsUaCkmYVLAPcRukaGUHNokOOBY",
  authDomain: "e-commerce-db-4824a.firebaseapp.com",
  databaseURL: "https://e-commerce-db-4824a.firebaseio.com",
  projectId: "e-commerce-db-4824a",
  storageBucket: "e-commerce-db-4824a.appspot.com",
  messagingSenderId: "782192992179",
  appId: "1:782192992179:web:19ef2f6157b58627f3b5c6",
  measurementId: "G-8B85S52VZ2",
};

firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // if user DOESN'T exists
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(err);
    }
  }
  // if user already exists
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
