// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANYvEQk6rkElioG2W9thb6I0WPrFQsNYY",
  authDomain: "portfolio-4c322.firebaseapp.com",
  projectId: "portfolio-4c322",
  storageBucket: "portfolio-4c322.appspot.com",
  messagingSenderId: "507944843880",
  appId: "1:507944843880:web:16cad0898ac8b9372859dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export { firestoreDB };
