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
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) 
        return;
    
    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    // console.log(snapshot);

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

export const addCollectionsAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
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