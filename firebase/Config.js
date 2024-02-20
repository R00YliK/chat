import {getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES,
    query,
    onSnapshot,
    getAuth,
    signInWithEmailAndPassword,
};