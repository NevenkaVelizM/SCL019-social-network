import {
  GoogleAuthProvider,
  addDoc,
  getDoc,
  query,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  Timestamp,
  createUserWithEmailAndPassword,
  getAuth,
  getFirestore,
  initializeApp,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  orderBy,
  updateProfile,
} from "./firebase-init.js";

import { firebaseConfig } from "./config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// registro con email y contraseña (Registro de usuarios nuevos)
export const registerUser = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
      });
      emailVerificationRegister();
      alert("Email verification sent!");
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const validateEmailRequire = document.querySelector(".emailRequired");
      const validateEmailInUse = document.querySelector(".emailInUseInvalid");
      if (errorCode === "auth/invalid-email") {
        validateEmailRequire.style.display = "block";
      }
      if (errorCode === "auth/email-already-in-use") {
        validateEmailInUse.style.display = "block";
      } else {
        validateEmailInUse.style.display = "none";
      }
    });
  return createUserWithEmailAndPassword;
};

const emailVerificationRegister = () => {
  sendEmailVerification(auth.currentUser).then(() => {
  });
};

// login con google
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = "#/wall";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

// Para conocer el estado de autenticación del usuario
export const activeUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.hash = "#/wall";
      const userId = user.uid;
    } else if (!user) {
      // User is signed out
      // ...
    }
  });
};

export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user.emailVerified === true) {
        window.location.hash = "#/wall";
      } else {
        alert("Please verify your email for login");
      }
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const loginValidateEmail = document.querySelector(".emailLoginEnter");
      const loginUserNotFound = document.querySelector(".userNotFound");
      const loginWrongPassword = document.querySelector(".wrongPassword");
      if (errorCode === "auth/invalid-email") {
        loginValidateEmail.style.display = "block";
      }
      if (errorCode === "auth/user-not-found") {
        loginUserNotFound.style.display = "block";
      } else {
        loginUserNotFound.style.display = "none";
      }
      if (errorCode === "auth/wrong-password") {
        loginWrongPassword.style.display = "block";
      } else {
        loginWrongPassword.style.display = "none";
      }
    });
};

export const logOut = () => {
  signOut(auth).then(() => {
    window.location.hash = "#/";
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
};

// -------------------------FIRESTORE----------------------------

// Conectamos con nuestra Base de datos
export const db = getFirestore();

export const savePost = (description) => {
  let userName;
  if (auth.currentUser.displayName === null) {
    userName = auth.currentUser.email;
  } else {
    userName = auth.currentUser.displayName;
  }
  addDoc(collection(db, "posts"), {
    userPost: description,
    userName,
    userId: auth.currentUser.uid,
    like: [],
    currentDate: Timestamp.fromDate(new Date()),
  });
};

// Obtener posts en tiempo real
export const getPosts = (callback) => {
  const colRef = collection(db, "posts");
  const q = query(colRef, orderBy("currentDate", "desc"));
  onSnapshot(q, callback);
};

export const deletePost = (id) => deleteDoc(doc(db, "posts", id));

export const getPost = (id) => getDoc(doc(db, "posts", id));

export const updatePost = (id, updatePosts) => updateDoc(doc(db, "posts", id), updatePosts);

export const like = (userId, idPost) => updateDoc(doc(db, "posts", idPost), {
  like: arrayUnion(userId),
});

export const dislike = (userId, idPost) => updateDoc(doc(db, "posts", idPost), {
  like: arrayRemove(userId),
});
