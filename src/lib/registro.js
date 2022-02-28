// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
getAuth,
createUserWithEmailAndPassword,
signInWithPopup, 
GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';
//signInWithEmailAndPassword


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCilQ3aBq8YPJ8lllWOyFdWtUSNSWVevjg",
authDomain: "social-network-codezan.firebaseapp.com",
projectId: "social-network-codezan",
storageBucket: "social-network-codezan.appspot.com",
messagingSenderId: "946541643320",
appId: "1:946541643320:web:871354dd18ba06271648cd",
measurementId: "G-3MCLJ446BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

//registro con email y constraseña
export const registerUser= (userName, email, password) => {
    createUserWithEmailAndPassword(auth, userName, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
  });
}

// login con google
export const loginWithGoogle= () => {
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
