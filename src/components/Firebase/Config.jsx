// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6CM5mue0cIyvaBLH4YDaNbGxHgdGUDWY",
    authDomain: "vfventiladores.firebaseapp.com",
    projectId: "vfventiladores",
    storageBucket: "vfventiladores.appspot.com",
    messagingSenderId: "718942073467",
    appId: "1:718942073467:web:9058bd1eb4f8b94c44a8de",
    measurementId: "G-5LTFTQ52R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()