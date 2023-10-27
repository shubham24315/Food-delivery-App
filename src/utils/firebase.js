// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD2dxP_PZQGHTrwxPqQK-KsDX0Ud7UGGM",
  authDomain: "food-app-76108.firebaseapp.com",
  projectId: "food-app-76108",
  storageBucket: "food-app-76108.appspot.com",
  messagingSenderId: "832434568173",
  appId: "1:832434568173:web:040298140eb0e3a04105e4",
  measurementId: "G-D83MXQ9NW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);