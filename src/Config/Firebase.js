// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCN0w9wQRiwBRfGG3fc5DCjX4j6gdpagoY",
  authDomain: "fresheat-ed0b3.firebaseapp.com",
  projectId: "fresheat-ed0b3",
  storageBucket: "fresheat-ed0b3.firebasestorage.app",
  messagingSenderId: "429919351722",
  appId: "1:429919351722:web:ca2e70eb58a66f731231d3",
  measurementId: "G-QGY3056YDK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
