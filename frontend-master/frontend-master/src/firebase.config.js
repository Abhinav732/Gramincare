// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBH2CA_w3f-XZETlgO4sYjmSmVSsjbSis",
  authDomain: "health-clinic-4f858.firebaseapp.com",
  projectId: "health-clinic-4f858",
  storageBucket: "health-clinic-4f858.appspot.com",
  messagingSenderId: "161493916704",
  appId: "1:161493916704:web:d6c2835ea3922af7bfb045",
  measurementId: "G-1239ELL3K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.appVerificationDisabledForTesting = true;