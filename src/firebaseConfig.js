// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDD5BJgqLYRJ3g_7pw09aNAXGvXxb2PxQQ",
  authDomain: "meenah-52c73.firebaseapp.com",
  projectId: "meenah-52c73",
  storageBucket: "meenah-52c73.appspot.com",
  messagingSenderId: "667966559497",
  appId: "1:667966559497:web:99113c52ab33cfade6afd8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getAuth(app)
export const fsdb = getFirestore(app)