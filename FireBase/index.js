// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe9sIwfMhRZVzIDChsvRpj7gmdErNFFwI",
  authDomain: "react-95cd6.firebaseapp.com",
  projectId: "react-95cd6",
  storageBucket: "react-95cd6.appspot.com",
  messagingSenderId: "408672938268",
  appId: "1:408672938268:web:bfe2fbc6628465b9c2f2d9",
  measurementId: "G-XB8GCG72MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

const db = getFirestore();
export {db};