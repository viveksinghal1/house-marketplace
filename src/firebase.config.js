// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb2whBcWXOS1EQRgfxNLqaGavVm70VwtE",
  authDomain: "house-marketplace-app-10e52.firebaseapp.com",
  projectId: "house-marketplace-app-10e52",
  storageBucket: "house-marketplace-app-10e52.appspot.com",
  messagingSenderId: "800363567770",
  appId: "1:800363567770:web:355781440eb02cee02dd23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore()