// importamos la funcion que vamos a testear
import { changeView } from "../src/router/router.js";

describe("changeView", () => {
  it("debería ser una función", () => {
    expect(typeof changeView).toBe("function");
  });
});
