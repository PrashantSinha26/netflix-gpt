// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQB9uFStPaHx3Hig22COLtzAYmyz_qDdU",
  authDomain: "netflixgpt-d5419.firebaseapp.com",
  projectId: "netflixgpt-d5419",
  storageBucket: "netflixgpt-d5419.firebasestorage.app",
  messagingSenderId: "362084528186",
  appId: "1:362084528186:web:0bff998aaaa94537060503",
  measurementId: "G-7BRFBVRT8S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
