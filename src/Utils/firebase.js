import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBeF9KzY-FR1gWIuj4O32NeoOdVXnrxHvQ",
  authDomain: "netflix-clone-c50b9.firebaseapp.com",
  projectId: "netflix-clone-c50b9",
  storageBucket: "netflix-clone-c50b9.appspot.com",
  messagingSenderId: "638963799177",
  appId: "1:638963799177:web:d5a99029e9345e2d322258"
};

  
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export {db, auth};