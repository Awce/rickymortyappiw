import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYlo_luieFyVWaR6eSJpfD-g663ulbq68",
  authDomain: "rickandmortyaddchar.firebaseapp.com",
  projectId: "rickandmortyaddchar",
  storageBucket: "rickandmortyaddchar.appspot.com",
  messagingSenderId: "193896811222",
  appId: "1:193896811222:web:9ac74a1dd62c30172d9777",
};

firebase.initializeApp(firebaseConfig);
