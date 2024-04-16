import firebase from 'firebase';

// Add other Firebase services you are using


/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcygS0XE6RN_JV9mRWoovbDH81XlW7lpc",
  authDomain: "clone-d0df3.firebaseapp.com",
  databaseURL: "https://clone-d0df3-default-rtdb.firebaseio.com",
  projectId: "clone-d0df3",
  storageBucket: "clone-d0df3.appspot.com",
  messagingSenderId: "838169616206",
  appId: "1:838169616206:web:114dcbb4c46c557d00481f",
  measurementId: "G-2LWKMPPCST"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };