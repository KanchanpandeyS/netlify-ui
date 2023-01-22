import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAU-S-ponwhE_NUJIajYieazRSPLW2v0OQ",
  authDomain: "react-netlify-clone-ba0a6.firebaseapp.com",
  projectId: "react-netlify-clone-ba0a6",
  storageBucket: "react-netlify-clone-ba0a6.appspot.com",
  messagingSenderId: "734923962672",
  appId: "1:734923962672:web:51e8d9de6bfd62d00030f5",
  measurementId: "G-MTMTSCJ27T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
