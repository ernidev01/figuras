import { Figura } from "./Figura.js";

class Cuadrado extends Figura {
  constructor(lado1) {
    super("Cuadrado", 4);
    this.lado1 = lado1;
  }
  area() {
    let a = this.lado1 * this.lado1;
    return `El area del cuadrado es: ${a}`;
  }
  perimetro() {
    let p = this.lado1 * 4;
    return `El perimetro del cuadrado es: ${p}`;
  }
}
class Rectangulo extends Figura {
  constructor(base, altura) {
    super("Rectangulo ", 4);
    this.base = base;
    this.altura = altura;
  }
  area() {
    let a = (Math.sqrt(3) / 4) * Math.pow(this.lado1, 2);
    return `El area del Triangulo Equilatero es: ${a}`;
  }
  perimetro() {
    let p = this.lado1 * 3;
    return `El perimetro del Triangulo Equilatero es: ${p}`;
  }
}
