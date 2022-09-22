import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq4cwtZerPOHLmEHTLIS7K-Qc1xpUltXM",
  authDomain: "jardineriaartemis-e3995.firebaseapp.com",
  projectId: "jardineriaartemis-e3995",
  storageBucket: "jardineriaartemis-e3995.appspot.com",
  messagingSenderId: "104457689313",
  appId: "1:104457689313:web:94b1d3332bc4204563ffa0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);