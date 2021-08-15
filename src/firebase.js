import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore";
import "firebase/storage"


let firebaseConfig = {
    apiKey: "AIzaSyCxCfHaw3hmjGdpHOya0JH4jdHDDYZAa-c",
    authDomain: "reels-e02e4.firebaseapp.com",
    projectId: "reels-e02e4",
    storageBucket: "reels-e02e4.appspot.com",
    messagingSenderId: "807723771359",
    appId: "1:807723771359:web:d902ab9f25a63afc5f506a"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore=firebase.firestore();
  
  export const auth=firebase.auth();

  export const storage=firebase.storage();
  
  let provider=new firebase.auth.GoogleAuthProvider();

  export const SignInWithGoogle= ()=> auth.signInWithPopup(provider);

  export default firebase;
