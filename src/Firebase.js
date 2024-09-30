import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAucxF90a3PG0mgByykHUXJAT2S1oU-0Bo",
  authDomain: "cadastro-f8a5b.firebaseapp.com",
  projectId: "cadastro-f8a5b",
  storageBucket: "cadastro-f8a5b.appspot.com",
  messagingSenderId: "237961012930",
  appId: "1:237961012930:web:af60d8b2930463dd183d5b"
};




if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default firebase;