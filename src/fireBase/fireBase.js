import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCKatC7zvpSia3FlK8if1gXl7j7xhY5e28",
  authDomain: "projet1-326a8.firebaseapp.com",
  projectId: "projet1-326a8",
  storageBucket: "projet1-326a8.appspot.com",
  messagingSenderId: "860595155799",
  appId: "1:860595155799:web:d1ef1ff220a31cbf4bc412",
  measurementId: "G-PCFCP4Z57S"
};
initializeApp(firebaseConfig);
export const db = getFirestore();