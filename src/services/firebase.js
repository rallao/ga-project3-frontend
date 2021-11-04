import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA5FiVo9-LEB0pwQw9w3kcQ6dCyxedxbaU",
    authDomain: "react-crm-4db12.firebaseapp.com",
    projectId: "react-crm-4db12",
    storageBucket: "react-crm-4db12.appspot.com",
    messagingSenderId: "379849078502",
    appId: "1:379849078502:web:ba4baab30a0d29c2a16d27"
};

firebase.initializeApp(firebaseConfig);

// set up auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


function signIn() {
    return auth.signInWithPopup(provider);
}

function logOut() {
    return auth.signOut();
}


export {
    auth,
    signIn,
    logOut
}