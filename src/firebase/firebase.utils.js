import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'; 

const config ={
    apiKey: "AIzaSyD7rmDa2DltJRiX4Q1bqbRvDE4PFhLAQ3M",
    authDomain: "nassim-clothing.firebaseapp.com",
    projectId: "nassim-clothing",
    storageBucket: "nassim-clothing.appspot.com",
    messagingSenderId: "794843268394",
    appId: "1:794843268394:web:ce2c68f62f45cb40d18a53",
    measurementId: "G-BM46NLCEZW"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists){
    const {displayName, email}= userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;

}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ( ) => auth.signInWithPopup(provider);
export default firebase;