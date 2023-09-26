// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBVeBBew_8YJ97eNo1FTOy9GsH0jtLowec",
//   authDomain: "mlpscores-a6d96.firebaseapp.com",
//   projectId: "mlpscores-a6d96",
//   storageBucket: "mlpscores-a6d96.appspot.com",
//   messagingSenderId: "400774774469",
//   appId: "1:400774774469:web:baecac33b1e96aabe8faac",
//   measurementId: "G-CNSQ2LJQ7Q",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBVeBBew_8YJ97eNo1FTOy9GsH0jtLowec",
  authDomain: "mlpscores-a6d96.firebaseapp.com",
  projectId: "mlpscores-a6d96",
  storageBucket: "mlpscores-a6d96.appspot.com",
  messagingSenderId: "400774774469",
  appId: "1:400774774469:web:f1cc3fd5e0e72c48e8faac",
  measurementId: "G-WYLJ1HSQ9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
