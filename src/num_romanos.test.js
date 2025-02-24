import convertir_a_romanos from "./num_romanos.js";

describe("Convertir 1 a I", () => {
  it("deberia convertir uno en romano", () => {
    expect(convertir_a_romanos(1)).toEqual("I");
  });
});

describe("Convertir 5 a I", () => {
  it("deberia convertir uno en romano", () => {
    expect(convertir_a_romanos(5)).toEqual("V");
  });
});

