// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK0PODk8cevkYVKT07PpA7yY9yjalFl0s",
  authDomain: "fir-practice-b956b.firebaseapp.com",
  projectId: "fir-practice-b956b",
  storageBucket: "fir-practice-b956b.appspot.com",
  messagingSenderId: "851206475935",
  appId: "1:851206475935:web:a917d96d1d045c7d54d2aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);