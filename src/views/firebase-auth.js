import { createUserWithEmailAndPassword, getAuth } from "./firebase-init.js";

export function createUser(emailValue, passwordValue) {
  if (!emailValue || !passwordValue) {
    throw new TypeError("Missing email and/or password");
  }

  const auth = getAuth();

  return createUserWithEmailAndPassword(
    auth,
    emailValue,
    passwordValue,
  );
}
