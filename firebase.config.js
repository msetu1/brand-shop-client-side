// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADAxSusAAagwAxiPiqVIdGUYyoUT8uvDc",
  authDomain: "brand-shop-client-side-d9c6a.firebaseapp.com",
  projectId: "brand-shop-client-side-d9c6a",
  storageBucket: "brand-shop-client-side-d9c6a.appspot.com",
  messagingSenderId: "969619985192",
  appId: "1:969619985192:web:0bfb7e92bd5fa3a156b61d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;