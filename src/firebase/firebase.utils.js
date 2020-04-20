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



export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
    .then((result) => {
        console.log("Signed in with Google was successful");
    })
    .catch((error) => {
        console.log("Google sing in failed");
    });

export const createUserProfile = async (userAuth)=>{
    if(!userAuth)
        return ;
    const userDocRef = firestore.doc(`users/${userAuth.uid}`);
    const userDocSnapshot = await userDocRef.get();
    if(!userDocSnapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            userDocRef.set({
                displayName,
                email,
                createdAt
            })
        }catch (e) {
            console.log("Error creating user in the database")
        }
    }else{
        console.log('User already exists');
    }
    return userDocRef;
};

export default firebase;