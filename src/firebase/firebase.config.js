import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX6H6ANryVRT61TRB_ep--NoanPgbiMuk",
  authDomain: "studymate-8bc38.firebaseapp.com",
  projectId: "studymate-8bc38",
  storageBucket: "studymate-8bc38.firebasestorage.app",
  messagingSenderId: "227999029502",
  appId: "1:227999029502:web:1f0bc39c87c565ed5aadaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const googleProvider = new GoogleAuthProvider();

export default app;
