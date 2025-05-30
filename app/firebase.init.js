// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO7xKsRNiuS-Q2GI59vl1mIikhqA94-7U",
  authDomain: "front-end-job-task.firebaseapp.com",
  projectId: "front-end-job-task",
  storageBucket: "front-end-job-task.firebasestorage.app",
  messagingSenderId: "514268387907",
  appId: "1:514268387907:web:ca9ceac7c320c35ec812f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)