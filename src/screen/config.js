import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


  const firebaseConfig = {
    apiKey: "AIzaSyBZQ3GbqLNwA2eLr3jF50XZvorFasNpQrA",
    authDomain: "listmovie-19487.firebaseapp.com",
    projectId: "listmovie-19487",
    storageBucket: "listmovie-19487.appspot.com",
    messagingSenderId: "1072517666518",
    appId: "1:1072517666518:web:eb1d2268471574439f9b77"
  };

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export { db };
