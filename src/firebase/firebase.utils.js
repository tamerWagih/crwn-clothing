import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDYvZtPm59k8hDoDNfZujXhYKbNY0hJ7S4',
  authDomain: 'crwn-db-30005.firebaseapp.com',
  projectId: 'crwn-db-30005',
  storageBucket: 'crwn-db-30005.appspot.com',
  messagingSenderId: '956761593873',
  appId: '1:956761593873:web:3b8262123b043ef2f0b9b0',
  measurementId: 'G-XHK3DRL6K5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
