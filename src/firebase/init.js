// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJgf-ontBGoLxS_xcjEVP_vOzPq0J1XWQ",
  authDomain: "pasti-piw.firebaseapp.com",
  projectId: "pasti-piw",
  storageBucket: "pasti-piw.appspot.com",
  messagingSenderId: "988717583420",
  appId: "1:988717583420:web:78e5f5b6c9c0372382c739",
  measurementId: "G-T5LW38LWLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);