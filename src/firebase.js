import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnV13tp1QcjdrdCkCZqeNuHij0PVBO_bw",
  authDomain: "read-later-db96e.firebaseapp.com",
  databaseURL: "https://read-later-db96e.firebaseio.com",
  projectId: "read-later-db96e",
  storageBucket: "read-later-db96e.appspot.com",
  messagingSenderId: "740512615367",
  appId: "1:740512615367:web:4ab395d1ad9e3ae45aa7e2",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export const databaseRef = database.collection("myBooks");

export default firebase;
