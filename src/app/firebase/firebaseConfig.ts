// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA047lwfz-wyTrzQOhvh4aLpQ4qXvdNxyU",
  authDomain: "batch-2504e-37adc.firebaseapp.com",
  databaseURL: "https://batch-2504e-37adc-default-rtdb.firebaseio.com",
  projectId: "batch-2504e-37adc",
  storageBucket: "batch-2504e-37adc.firebasestorage.app",
  messagingSenderId: "201939465475",
  appId: "1:201939465475:web:3b2f17f02ae7d9a89c6536",
  measurementId: "G-DB0CPB1WPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);