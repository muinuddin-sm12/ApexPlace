// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLzmlT7qLSXis22yF4_r-En5WKw_1eu9c",
  authDomain: "assignment-9-294ac.firebaseapp.com",
  projectId: "assignment-9-294ac",
  storageBucket: "assignment-9-294ac.appspot.com",
  messagingSenderId: "823433074784",
  appId: "1:823433074784:web:a617318fa242d0794f0b05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);