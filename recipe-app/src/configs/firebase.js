// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCedlTvPGUw9-8t9AR5wUI9y0fUGKQuO4k",
  authDomain: "recipe-search-app-19e43.firebaseapp.com",
  projectId: "recipe-search-app-19e43",
  storageBucket: "recipe-search-app-19e43.appspot.com",
  messagingSenderId: "840139395188",
  appId: "1:840139395188:web:8652b436266e6964fc0121",
  measurementId: "G-42LR9CSNQH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
