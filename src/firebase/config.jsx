// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQHjeTs2zpVSI3XRCtdRd-59CivfSgedQ",
  authDomain: "miniblog-b3978.firebaseapp.com",
  projectId: "miniblog-b3978",
  storageBucket: "miniblog-b3978.appspot.com",
  messagingSenderId: "194639986725",
  appId: "1:194639986725:web:24da170ffa1672029affcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o banco de dados da Firestore
const db = getFirestore(app)

export { db };