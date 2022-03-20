import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config ={
    apiKey: "AIzaSyD7rmDa2DltJRiX4Q1bqbRvDE4PFhLAQ3M",
    authDomain: "nassim-clothing.firebaseapp.com",
    projectId: "nassim-clothing",
    storageBucket: "nassim-clothing.appspot.com",
    messagingSenderId: "794843268394",
    appId: "1:794843268394:web:ce2c68f62f45cb40d18a53",
    measurementId: "G-BM46NLCEZW"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ( ) => auth.signInWithPopup(provider);
export default firebase;