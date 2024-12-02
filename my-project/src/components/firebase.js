// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZTW5NUrQUQCOXj6-scKrMPu7P6oo9CiQ",
  authDomain: "auth-4c10a.firebaseapp.com",
  projectId: "auth-4c10a",
  storageBucket: "auth-4c10a.firebasestorage.app",
  messagingSenderId: "896272151319",
  appId: "1:896272151319:web:766ebee2b1836e25c73d52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;