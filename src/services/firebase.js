// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD7RwKecQ9VE4mgqoLf1T-X1JKCgBuTL6s",
  authDomain: "adaroom-3619c.firebaseapp.com",
  projectId: "adaroom-3619c",
  storageBucket: "adaroom-3619c.appspot.com",
  messagingSenderId: "579081113147",
  appId: "1:579081113147:web:6059127efbbba44312d61e",
  measurementId: "G-V54Z4QVENV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
