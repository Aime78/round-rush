// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpmFsJW0Gb5ZLd2lDMrAFSr5D7lfzxCKM',
  authDomain: 'round-rush-28a5f.firebaseapp.com',
  projectId: 'round-rush-28a5f',
  storageBucket: 'round-rush-28a5f.appspot.com',
  messagingSenderId: '624472386005',
  appId: '1:624472386005:web:32717f18750c724d80755c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
