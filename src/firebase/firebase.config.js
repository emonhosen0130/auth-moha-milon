// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_qmbmLUKl0yGJh56pWungrqEiZdkdqzM",
  authDomain: "auth-moha-milon-b10df.firebaseapp.com",
  projectId: "auth-moha-milon-b10df",
  storageBucket: "auth-moha-milon-b10df.appspot.com",
  messagingSenderId: "774273113203",
  appId: "1:774273113203:web:5fe8e6b592b8df4eeb5e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;