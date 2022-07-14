import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvXM06zhIq8Hk-fGX73kk74t6YIsIdTBA",
  authDomain: "housing-79296.firebaseapp.com",
  projectId: "housing-79296",
  storageBucket: "housing-79296.appspot.com",
  messagingSenderId: "656928223295",
  appId: "1:656928223295:web:4c3b92a40c5827e688888a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()