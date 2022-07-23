import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
    
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBSmXIhlYqh9uu35rqBozttnM55zKyMnUo",
    authDomain: "quiz-app-79f76.firebaseapp.com",
    projectId: "quiz-app-79f76",
    storageBucket: "quiz-app-79f76.appspot.com",
    messagingSenderId: "861281730104",
    appId: "1:861281730104:web:6129c7eb718c2c55ec70cd"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth(app);

// sign up - native
export const nativeSignUP = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user', user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode', errorCode,' errorMessage',errorMessage)
    });
}

// sign up - google
export const googleSignIN = () => {
    signInWithPopup(auth, GoogleAuthProvider)
}

// sign in - email n password
export const nativeSignIN = async (email, password) => {

    return await signInWithEmailAndPassword(auth, email, password)
}

// sign out
export const nativeSignOUT = () => signOut(auth);


export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
