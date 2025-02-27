// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoJX9kqkg722Gk2jDsr8NsfQrmKbSpmM0",
  authDomain: "techtronics-admin.firebaseapp.com",
  projectId: "techtronics-admin",
  storageBucket: "techtronics-admin.firebasestorage.app",
  messagingSenderId: "580238484981",
  appId: "1:580238484981:web:b1f252cba76f21b7fbacbc",
  measurementId: "G-NR7L2MQPR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);