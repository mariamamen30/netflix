import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4hulPILpHmt0MZx_38dMw288tBiwc9Uc",
  authDomain: "netflix-4eb0a.firebaseapp.com",
  projectId: "netflix-4eb0a",
  storageBucket: "netflix-4eb0a.appspot.com",
  messagingSenderId: "219856946243",
  appId: "1:219856946243:web:c7cfb9c15497249e1dc0f6",
  measurementId: "G-4VTW1DJRZ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
