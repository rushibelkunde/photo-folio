// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from "firebase/storage";

// Create a root reference


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn7LhX6bXy-zhvQIHXG2WoSn6mU18l9G0",
  authDomain: "photofolio-771f9.firebaseapp.com",
  projectId: "photofolio-771f9",
  storageBucket: "photofolio-771f9.appspot.com",
  messagingSenderId: "297945406827",
  appId: "1:297945406827:web:84251c0e12a76e10e5402e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage();
