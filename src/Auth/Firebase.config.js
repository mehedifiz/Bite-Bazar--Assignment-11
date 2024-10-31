// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9h_aFleln95_zdcWqxuPiHJpOQdjetkQ",
  authDomain: "bite-bazar.firebaseapp.com",
  projectId: "bite-bazar",
  storageBucket: "bite-bazar.appspot.com",
  messagingSenderId: "240397055952",
  appId: "1:240397055952:web:a2de68819e726adaa32bd5",
  measurementId: "G-RPV36XVWDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  const auth = getAuth(app)
  export default auth;