import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYrpmf-q4OOu8ZOE4rUwFpLITjimZQnyo",
  authDomain: "one-piece-chat.firebaseapp.com",
  projectId: "one-piece-chat",
  storageBucket: "one-piece-chat.appspot.com",
  messagingSenderId: "241800304483",
  appId: "1:241800304483:web:be258486805fa8b918a556",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
