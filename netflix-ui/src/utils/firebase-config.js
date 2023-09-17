// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3vtxpaqIPNcp-S9VxWUV8LuTMB6xxWbM",
  authDomain: "react-netflix-clone-74d59.firebaseapp.com",
  projectId: "react-netflix-clone-74d59",
  storageBucket: "react-netflix-clone-74d59.appspot.com",
  messagingSenderId: "589109409062",
  appId: "1:589109409062:web:2af1c6fc9245eaba34bde7",
  measurementId: "G-SWFHWS6YXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(app);