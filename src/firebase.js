// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc_XPYkJbhkoPNNIz3rGegsRAnLLYbWLk",
  authDomain: "listed-36ea7.firebaseapp.com",
  projectId: "listed-36ea7",
  storageBucket: "listed-36ea7.appspot.com",
  messagingSenderId: "342183771556",
  appId: "1:342183771556:web:75ad6e595293c424931531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
