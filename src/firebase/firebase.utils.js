import firebase from "firebase/app"; //firebase SDK core - is always required
import 'firebase/auth' // firebase product
import 'firebase/firestore' //firebase product



const config = {
    apiKey: "AIzaSyDRlcYk7RHFeTV3A-uaYt2PdCn1Ret6vJo",
    authDomain: "about-me-a7a84.firebaseapp.com",
    databaseURL: "https://about-me-a7a84.firebaseio.com",
    projectId: "about-me-a7a84",
    storageBucket: "about-me-a7a84.appspot.com",
    messagingSenderId: "146027793483",
    appId: "1:146027793483:web:d3a321da7ad0e20e1951ce",
    measurementId: "G-9KE5H68Y85"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});



export const signInWithGoogle =async ()=> (
    await auth.signInWithPopup(googleProvider)

);

export default firebase