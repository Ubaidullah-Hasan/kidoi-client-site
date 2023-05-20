// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxpc7vObRmPI9CgdmBDFT2P25-QEnBcu8",
    authDomain: "kidoi-toy-shop.firebaseapp.com",
    projectId: "kidoi-toy-shop",
    storageBucket: "kidoi-toy-shop.appspot.com",
    messagingSenderId: "203031626878",
    appId: "1:203031626878:web:4ff024c7f16f83138e442f",
};
console.log(process.env.FIREBASE_APIKEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;