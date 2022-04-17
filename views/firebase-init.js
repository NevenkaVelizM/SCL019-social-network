// eslint-disable-next-line import/no-unresolved
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
// eslint-disable-next-line import/no-unresolved
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  doc,
  query,
  collection,
  addDoc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  updateDoc,
  deleteDoc,
  Timestamp,
  arrayRemove,
  arrayUnion,
// eslint-disable-next-line import/no-unresolved
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// import { collection, addDoc } from "firebase/firestore";

export {
  initializeApp,
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendEmailVerification,
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  query,
  getDoc,
  orderBy,
  updateDoc,
  deleteDoc,
  Timestamp,
  arrayRemove,
  arrayUnion,
  updateProfile,
};
