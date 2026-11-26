 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vedai-16f4a.firebaseapp.com",
  projectId: "vedai-16f4a",
  storageBucket: "vedai-16f4a.firebasestorage.app",
  messagingSenderId: "154513352207",
  appId: "1:154513352207:web:78bbdd962e2b8faf1ea57a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

