// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeqlwJGg5nyU7-oj340fZY0DaG0Z8tW0w",
  authDomain: "playo-82b0a.firebaseapp.com",
  projectId: "playo-82b0a",
  storageBucket: "playo-82b0a.appspot.com",
  messagingSenderId: "789627110677",
  appId: "1:789627110677:web:3bfee82e1e06a18af9151c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const updateProfile = getFirestore(app);
const auth = getAuth(app);
const provider =new GoogleAuthProvider();

export { auth ,provider};
export default updateProfile;
