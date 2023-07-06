
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADwIN0Z9xTIr1SvBb94hoOxWylG3r4c_o",
  authDomain: "focusly-77acc.firebaseapp.com",
  projectId: "focusly-77acc",
  storageBucket: "focusly-77acc.appspot.com",
  messagingSenderId: "987428886590",
  appId: "1:987428886590:web:190fd8c8a2c8164021596f",
  measurementId: "G-V5T9EWL09C"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
