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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
