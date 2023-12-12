import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNF9Kzr9mXq1HWhVaSMI5kjBqGwyYf050",
  authDomain: "nwitter-reloaded-fbe87.firebaseapp.com",
  projectId: "nwitter-reloaded-fbe87",
  storageBucket: "nwitter-reloaded-fbe87.appspot.com",
  messagingSenderId: "90188249017",
  appId: "1:90188249017:web:ef2b575a1ac40d31f6a868",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
