// // importamos la funcion que vamos a testear
// import { changeView } from "../src/router/router.js";

// describe("changeView", () => {
//   it("debería ser una función", () => {
//     expect(typeof changeView).toBe("function");
//   });
// });

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "../src/views/firebase-init";

jest.mock("../src/views/firebase-init");

describe("Auth", () => {
  describe("createUserWithEmailAndPassword", () => {
    test("should fail if called without arguments", () => {
      expect(() => createUserWithEmailAndPassword()).toThrow();
      expect(() => createUserWithEmailAndPassword("justEmail@test.com")).toThrow();
    });

    test("should return createUserWithEmailAndPassword result", async () => {
      const creationResult = await createUserWithEmailAndPassword("justEmail@test.com", "password");
      expect(creationResult).toStrictEqual({
        auth: getAuth(),
        email: "justEmail@test.com",
        password: "password",
      });
    });
  });
});
