import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDq4cwtZerPOHLmEHTLIS7K-Qc1xpUltXM",
  authDomain: "jardineriaartemis-e3995.firebaseapp.com",
  projectId: "jardineriaartemis-e3995",
  storageBucket: "jardineriaartemis-e3995.appspot.com",
  messagingSenderId: "104457689313",
  appId: "1:104457689313:web:94b1d3332bc4204563ffa0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);