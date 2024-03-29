import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1f_VBsTUmpVcwpV6kwnEJLksio2_nWuo",
  authDomain: "todoapp-559c3.firebaseapp.com",
  projectId: "todoapp-559c3",
  storageBucket: "todoapp-559c3.appspot.com",
  messagingSenderId: "563752565435",
  appId: "1:563752565435:web:6fa3a053e0e7038e3b479e",
  measurementId: "G-JGK9Y80QPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
