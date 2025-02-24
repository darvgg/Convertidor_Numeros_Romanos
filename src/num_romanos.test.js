import convertir_a_romanos from "./sumador.js";

describe("Convertir 1 a I", () => {
  it("deberia convertir uno en romano", () => {
    expect(convertir_a_romanos(1)).toEqual("I");
  });
});


