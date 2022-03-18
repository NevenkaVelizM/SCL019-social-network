const getAuth = jest.fn(() => ({
  auth: "test",
}));

const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({
  auth,
  email,
  password,
}));

export {
  getAuth,
  createUserWithEmailAndPassword,
};
