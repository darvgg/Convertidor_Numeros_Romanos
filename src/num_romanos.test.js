import convertir_a_romanos from "./num_romanos.js";

describe("Convertir 1 a I", () => {
  it("deberia convertir 1 en romano", () => {
    expect(convertir_a_romanos(1)).toEqual("I");
  });
});

describe("Convertir 5 a I", () => {
  it("deberia convertir 5 en romano", () => {
    expect(convertir_a_romanos(5)).toEqual("V");
  });
});

describe("Convertir 9 a I", () => {
  it("deberia convertir 9 en romano", () => {
    expect(convertir_a_romanos(9)).toEqual("IX");
  });
});

describe("No convertir a 0", () => {
  it("deberia convertir 0 en 0", () => {
    expect(convertir_a_romanos(0)).toEqual("0");
  });
});

describe("No convertir numeros menores a 0", () => {
  it("No deberia convertir dandonos 0", () => {
    expect(convertir_a_romanos(-15)).toEqual("0");
  });
});

describe("Convertir 584 a romano", () => {
  it("deberia convertir 584 en romano", () => {
    expect(convertir_a_romanos(2584)).toEqual("DLXXXIV");
  });
});

describe("Sobrepasa el limite", () => {
  it("deberia convertir 1001 en romano", () => {
    expect(convertir_a_romanos(5001)).toEqual("Se Paso de nuestro limite");
  });
});


