import './App.css';
import Home from './components/Home.component';
import {Route, Routes } from 'react-router-dom';
import Game from './components/Game.component';
import HighScores from './components/HighScores.component';
import { useEffect } from 'react';
import { auth, creatingUserDocument, database, onAuthStateChangedListener } from './app/firebase';
import { useSelector } from 'react-redux';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import SignIN from './components/signIN.component';
import SignUP from './components/signUP.component';
import { ToastContainer, toast } from "react-toastify";

function App() {
  const userScore = useSelector((state) => state.score.score)
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((auth) => {
      if (auth) {
        creatingUserDocument(auth);
      }
    });
    return unsubscribe;
  }, [auth]);




  useEffect(() => {
    const updateScore = async () => {
      if(auth !== null){ 
        const docRef = doc(database, 'users',auth.currentUser.uid);
        await updateDoc(docRef,{ 'score' : userScore})
      }
    }
    updateScore();
  },[userScore])
  return (
    <div className="App">
    <Routes>
      <Route index element={ <Home />} />
      <Route path='Game' element={<Game/>} />
      <Route path='Game/SignIn' element={ <SignIN/> } />
      <Route path='Game/SignIn/SignUp' element={ <SignUP/> } />
      <Route path='HighScores' element={<HighScores />} />
    </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
