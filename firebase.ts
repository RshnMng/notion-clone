import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBd4-MafQlCffGNzwYvktzucgl6fOmJ1KI",
  authDomain: "notion-clone-e8c2d.firebaseapp.com",
  projectId: "notion-clone-e8c2d",
  storageBucket: "notion-clone-e8c2d.firebasestorage.app",
  messagingSenderId: "944946993834",
  appId: "1:944946993834:web:85ae0ab692c4c859954ed3"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore(app);

export {db}