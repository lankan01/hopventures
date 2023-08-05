// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLv4Hp-9-G-5YYOas8z0yXsrQQw3Ibl0A",
  authDomain: "hop-ventures.firebaseapp.com",
  projectId: "hop-ventures",
  storageBucket: "hop-ventures.appspot.com",
  messagingSenderId: "36741700021",
  appId: "1:36741700021:web:4fbb280a8294ee4b8e61fc",
  measurementId: "G-RCTXYGFM59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
