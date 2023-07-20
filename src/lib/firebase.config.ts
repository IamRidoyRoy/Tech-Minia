// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYdw29n2VLja4wVqcYQNLm7AsCzTpP76c',
  authDomain: 'tech-minia.firebaseapp.com',
  projectId: 'tech-minia',
  storageBucket: 'tech-minia.appspot.com',
  messagingSenderId: '808557824964',
  appId: '1:808557824964:web:6f19b4eac6e57039a73291',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
