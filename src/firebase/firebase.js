// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMlqkHV5x9yKnwhgKhCc6dAki8dcLyX1I",
  authDomain: "arad-d46d0.firebaseapp.com",
  projectId: "arad-d46d0",
  storageBucket: "arad-d46d0.appspot.com",
  messagingSenderId: "887216358621",
  appId: "1:887216358621:web:1e7272f6c3f1ff0fcfc734",
  measurementId: "G-7VPZZHRJDL"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };