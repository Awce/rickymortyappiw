// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyDYlo_luieFyVWaR6eSJpfD-g663ulbq68",
  authDomain: "rickandmortyaddchar.firebaseapp.com",
  projectId: "rickandmortyaddchar",
  storageBucket: "rickandmortyaddchar.appspot.com",
  messagingSenderId: "193896811222",
  appId: "1:193896811222:web:9ac74a1dd62c30172d9777",
};

const firebase = initializeApp(config);

export function writeCharsData(
  id,
  name,
  status,
  species,
  type,
  gender,
  image,
  url
) {
  firebase.database().ref(`characters/${id}`).set({
    name: name,
    status: status,
    species: species,
    type: type,
    gender: gender,
    image: image,
    url: url,
  });
}
