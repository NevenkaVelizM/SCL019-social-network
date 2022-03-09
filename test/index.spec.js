//  importamos la funcion que vamos a testear

// eslint-disable-next-line import/named
import { myFunction } from "../src/views/register";

describe("myFunction", () => {
  it("debería ser una función", () => {
    expect(typeof myFunction).toBe("function");
  });
});
