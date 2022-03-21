import {
  getAuth,
  createUserWithEmailAndPassword,
} from "../src/views/firebase-init";

import { createUser } from "../src/views/firebase-auth.js";

jest.mock("../src/views/firebase-init");

describe("Auth", () => {
  describe("createUser", () => {
    test("should fail if called without arguments", () => {
      expect(() => createUser()).toThrow();
      expect(() => createUser("justEmail@test.com")).toThrow();
    });
    test("should call firebase createUserWithEmailAndPassword with auth object, email and password", async () => {
      await createUser("justEmail@test.com", "password");
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        getAuth(),
        "justEmail@test.com",
        "password",
      );
    });

    test("should return createUserWithEmailAndPassword result", async () => {
      const creationResult = await createUser("justEmail@test.com", "password");
      expect(creationResult).toStrictEqual({
        auth: getAuth(),
        email: "justEmail@test.com",
        password: "password",
      });
    });
  });
});
