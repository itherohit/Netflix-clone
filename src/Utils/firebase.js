import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAX9Z-o5GjqD81P4UjxuplH257aDmYi900",
    authDomain: "netflix-clone-39dff.firebaseapp.com",
    databaseURL: "https://netflix-clone-39dff-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-39dff",
    storageBucket: "netflix-clone-39dff.appspot.com",
    messagingSenderId: "975700449050",
    appId: "1:975700449050:web:6e327fbe8aa6fe39537ea3",
    measurementId: "G-K4YBKFQ2S4"
  };

  
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export {db, auth};