import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "clone-a6032.firebaseapp.com",
    projectId: "clone-a6032",
    storageBucket: "clone-a6032.appspot.com",
    messagingSenderId: "297278493842",
    appId: "1:297278493842:web:11bbb8eccdf839329c024b",
    measurementId: "G-DPG84582DV",
});

const auth = firebase.auth();

export { auth };
