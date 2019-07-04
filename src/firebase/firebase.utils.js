import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfI12UgFoGDAfpoUbxj0tL2eV3nFWcn2c",
    authDomain: "kfashion-db.firebaseapp.com",
    databaseURL: "https://kfashion-db.firebaseio.com",
    projectId: "kfashion-db",
    storageBucket: "",
    messagingSenderId: "809628675279",
    appId: "1:809628675279:web:29fc3ef96ffbae9a"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase
    .auth
    .GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;