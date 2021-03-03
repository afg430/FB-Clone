// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSeqKz4afrinFRzr7yU06b5viJPzPIAA0",
    authDomain: "facebook-clone-5d09e.firebaseapp.com",
    projectId: "facebook-clone-5d09e",
    storageBucket: "facebook-clone-5d09e.appspot.com",
    messagingSenderId: "882584623858",
    appId: "1:882584623858:web:4c6f2f07040ce6828b8e6b",
    measurementId: "G-C2MCM3DSKL"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;