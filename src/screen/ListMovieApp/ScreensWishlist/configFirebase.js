import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBqN8bA-qEVJVNYY_xebH_jjSJBegPQnzo',
  authDomain: 'apicrud-a6357.firebaseapp.com',
  projectId: 'apicrud-a6357',
  storageBucket: 'apicrud-a6357.appspot.com',
  messagingSenderId: '260651302293',
  appId: '1:260651302293:web:cd98f7bb0ce03c2d1f0a9c',
  measurementId: 'G-QD52L2WBC0',
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export {db};
