// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpCgi_U2F64w_ylz-rt6SK_JyYEqtnPFo',
  authDomain: 'intermidate-4bf79.firebaseapp.com',
  projectId: 'intermidate-4bf79',
  storageBucket: 'intermidate-4bf79.appspot.com',
  messagingSenderId: '216026112397',
  appId: '1:216026112397:web:53974cce162e3a1bc21dc4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}