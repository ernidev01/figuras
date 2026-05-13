import { TrianguloEquilatero } from "./Trinagulos.js";
import { TrianguloIsosceles } from "./Trinagulos.js";

function trianguloEquilatero(ladoTriangulo) {
  try {
    if (typeof ladoTriangulo != "number") {
      throw new Error("solo se aceptan numeros");
    }
    const triangulo = new TrianguloEquilatero(ladoTriangulo);

    console.log(triangulo);

    console.log(triangulo.area());
    console.log(triangulo.perimetro());
  } catch (error) {
    console.log("se ha producido un error:", error.message);
  }
}

trianguloEquilatero(6);
trianguloEquilatero("2");

function trianguloIsosceles(ladoTriangulo, base, altura) {
  try {
    if (
      typeof ladoTriangulo != "number" ||
      typeof base != "number " ||
      typeof altura != "number"
    ) {
      throw new Error("solo se aceptan numeros");
    }
    const triangulo = new TrianguloIsosceles(ladoTriangulo, base, altura);

    console.log(triangulo);

    console.log(triangulo.area());
    console.log(triangulo.perimetro());
  } catch (error) {
    console.log("se ha producido un error", error.message);
  }
}
trianguloIsosceles(6, 3, 2);
trianguloIsosceles("hola", 3, 2);
