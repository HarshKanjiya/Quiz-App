import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { 
    getAuth,
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
export const database = getFirestore(app);


export const auth = getAuth(app);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// db read
export const collectionRef = collection(database , 'users');

export const getUserData = async () => {
    const collectionRef = collection(database, 'users');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  };


// creating user DB


export const creatingDocumentforNativeSignUP = async (auth, extraData ) =>
{
  if(!auth) return;
  
  const userDocRef = doc(database,'users',auth.uid);
  const userSnapShot = await getDoc(userDocRef);
  
  if (!userSnapShot.exists()) {
    const { email } = auth;
    const displayName  = extraData.displayName;
    const score = 0;
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        score,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};


export const creatingUserDocument = async (auth, extraInfo = {} ) =>
{
  if(!auth) return;

  const userDocRef = doc(database,'users',auth.uid);
  const userSnapShot = await getDoc(userDocRef);
  
  if (!userSnapShot.exists()) {
    const { displayName, email } = auth;
    const score = 0;
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        score,
        ...extraInfo,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};



