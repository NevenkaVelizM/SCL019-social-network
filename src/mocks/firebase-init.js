const initializeApp = jest.fn((options) => options);
const getAuth = jest.fn(() => ({
  auth: "test",
}));
const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({
  auth,
  email,
  password,
}));
const firebaseConfig = {};

export {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  firebaseConfig,
};
