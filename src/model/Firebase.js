// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvZWuQZM53_qzmHLCPHGUM8yOizhrIsIo",
  authDomain: "podcart-d6f02.firebaseapp.com",
  projectId: "podcart-d6f02",
  storageBucket: "podcart-d6f02.appspot.com",
  messagingSenderId: "1083113916023",
  appId: "1:1083113916023:web:6e5060991eb820c11de872",
  measurementId: "G-XXCTJSB4EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app)