// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJXNGVrDJ47v3OD7_ubu5TlZPyT7ynQ4I",
  authDomain: "product-8a5a0.firebaseapp.com",
  projectId: "product-8a5a0",
  storageBucket: "product-8a5a0.appspot.com",
  messagingSenderId: "527842510245",
  appId: "1:527842510245:web:549a331858a1c842fb144c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
// export const auth = firebase.auth(app);
export default app;
