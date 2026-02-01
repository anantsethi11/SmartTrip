// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG0hBgGf5aCeSS-QcSHRDzxHSp9xLkxbs",
  authDomain: "smart-trip-26a66.firebaseapp.com",
  projectId: "smart-trip-26a66",
  storageBucket: "smart-trip-26a66.firebasestorage.app",
  messagingSenderId: "674608045776",
  appId: "1:674608045776:web:03e17c992ebf0fb31b88d5",
  measurementId: "G-LYD1JNP1R3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Corrected function name
