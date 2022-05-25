// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqTbJfebhheyFMEW5Q5w7YdFxPWvDWPnA",
  authDomain: "hmbr-international.firebaseapp.com",
  projectId: "hmbr-international",
  storageBucket: "hmbr-international.appspot.com",
  messagingSenderId: "391508607751",
  appId: "1:391508607751:web:09cf4f6dce6eb7c620fba2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;