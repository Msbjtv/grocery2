
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlb3OWba2EnhXZChHI2khIkgAlVBBh3VE",
  authDomain: "grocery2-560aa.firebaseapp.com",
  projectId: "grocery2-560aa",
  storageBucket: "grocery2-560aa.appspot.com",
  messagingSenderId: "980388588456",
  appId: "1:980388588456:web:ee2eed283de0d52ac20b9d",
  measurementId: "G-N9595Z3PD2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)