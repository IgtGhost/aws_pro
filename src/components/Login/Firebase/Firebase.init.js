import { initializeApp } from "firebase/app";
// import firebaseConfig from "./Firebase.config";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiN9y31gExCAv76_mizpSWuQ_FW9SXdT8",
  authDomain: "aws-main-a89f7.firebaseapp.com",
  projectId: "aws-main-a89f7",
  storageBucket: "aws-main-a89f7.appspot.com",
  messagingSenderId: "1079533376408",
  appId: "1:1079533376408:web:15424ad33a9a3b308991ed",
  measurementId: "G-E21KJ5R081"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app, auth };
// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCWr41P88xlgdx197BwHtApreH0ZgMUP7s",
//   authDomain: "awsfinal-9743c.firebaseapp.com",
//   projectId: "awsfinal-9743c",
//   storageBucket: "awsfinal-9743c.appspot.com",
//   messagingSenderId: "385397058000",
//   appId: "1:385397058000:web:018bde01f8da89deb131d5",
//   measurementId: "G-80VWRB5DVM"
// };

// Initialize Firebase
// export const initializeAuthentication = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);