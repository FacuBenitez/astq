import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBDFByY710vB_xZwJCCtVRKxtBpJB-uswc",
  
    authDomain: "react-journal-app-53913.firebaseapp.com",
  
    projectId: "react-journal-app-53913",
  
    storageBucket: "react-journal-app-53913.appspot.com",
  
    messagingSenderId: "154483303925",
  
    appId: "1:154483303925:web:dba023f78ac27b58da2cbc"
  
  };
  
  firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  

  export {
        db,
        googleAuthProvider,
        firebase
  }