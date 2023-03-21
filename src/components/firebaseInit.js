import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import FIREBASE_CONFIGURATION from "./firebaseConfig";

const firebaseConfig = FIREBASE_CONFIGURATION;
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
