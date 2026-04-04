// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // ✅ IMPORTANT

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAdM2MW3capRrhuliQrF_yLM2VtrsIZghA",
  authDomain: "react-learning-90e40.firebaseapp.com",
  projectId: "react-learning-90e40",

  // ✅ VERY IMPORTANT (ADD THIS)
  databaseURL: "https://react-learning-90e40-default-rtdb.asia-southeast1.firebasedatabase.app/",

  storageBucket: "react-learning-90e40.firebasestorage.app",
  messagingSenderId: "437875498386",
  appId: "1:437875498386:web:b72cfaa5925a3a91cff54b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Realtime DB + Auth
export const db = getDatabase(app);
export const auth = getAuth(app);

export default app;