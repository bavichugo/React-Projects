// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCev7f9qAEY27lJ73FcTt1meelS3SYAeM4",
  authDomain: "todo-app-e79d2.firebaseapp.com",
  databaseURL: "https://todo-app-e79d2-default-rtdb.firebaseio.com",
  projectId: "todo-app-e79d2",
  storageBucket: "todo-app-e79d2.appspot.com",
  messagingSenderId: "936624731003",
  appId: "1:936624731003:web:ac19d39c2ce819436703de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();