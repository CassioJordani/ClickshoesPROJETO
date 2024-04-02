// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbZNGhvEuVeqUpPMLrpWKAvnHdTgeWSIc",
  authDomain: "clickshoes-147f3.firebaseapp.com",
  projectId: "clickshoes-147f3",
  storageBucket: "clickshoes-147f3.appspot.com",
  messagingSenderId: "993699045175",
  appId: "1:993699045175:web:31bcd2dbb4e12bc5e384b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};