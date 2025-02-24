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

describe("Convertir 9 a I", () => {
  it("deberia convertir uno en romano", () => {
    expect(convertir_a_romanos(9)).toEqual("IX");
  });
});

describe("No convertir a 0", () => {
  it("deberia convertir uno en romano", () => {
    expect(convertir_a_romanos(0)).toEqual("0");
  });
});

describe("No convertir numeros menores a 0", () => {
  it("deberia convertir uno en romano", () => {
    expect(convertir_a_romanos(-15)).toEqual("0");
  });
});



