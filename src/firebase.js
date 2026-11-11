
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCczGr-Q-NYzeTsUNKvMPz0EtHprYCRG_k",
  authDomain: "blog-app-e5362.firebaseapp.com",
  projectId: "blog-app-e5362",
  storageBucket: "blog-app-e5362.firebasestorage.app",
  messagingSenderId: "779693906174",
  appId: "1:779693906174:web:13b154af7817e1cfafedaf"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);