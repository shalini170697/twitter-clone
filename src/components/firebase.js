// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB46NMKa_8nZNQTVVJyqnaOf2B77d-y4F0",
    authDomain: "twitter-clone-fa9a0.firebaseapp.com",
    projectId: "twitter-clone-fa9a0",
    storageBucket: "twitter-clone-fa9a0.appspot.com",
    messagingSenderId: "4031065660",
    appId: "1:4031065660:web:427dfb7dfb5eae58a85d39",
    measurementId: "G-LDSYBZCVEQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;