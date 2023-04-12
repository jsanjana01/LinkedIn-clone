import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore/lite";
// import { auth } from "firebase/auth/cordova";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhd7-1esHbiqtpdg87BARWH3Hk5duGIw8",
  authDomain: "linkedin-clone-f079a.firebaseapp.com",
  projectId: "linkedin-clone-f079a",
  storageBucket: "linkedin-clone-f079a.appspot.com",
  messagingSenderId: "740365246078",
  appId: "1:740365246078:web:f6e26a938433e73469c22f",
  measurementId: "G-M7XZ8X0QST",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
