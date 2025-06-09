// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxmr-H03OGmd5SJtWwGZHdGPfRk9j1fB0",
  authDomain: "netflixgpt-765f0.firebaseapp.com",
  projectId: "netflixgpt-765f0",
  storageBucket: "netflixgpt-765f0.firebasestorage.app",
  messagingSenderId: "786102021135",
  appId: "1:786102021135:web:954bf6edbb2e6ebffa077a",
  measurementId: "G-5C1P1ZWYW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();