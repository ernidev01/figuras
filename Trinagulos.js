import { Figura } from "./Figura.js";
export class TrianguloEquilatero extends Figura {
  constructor(lado1) {
    super("Truangulo Equilatero", 3);
    this.lado1 = lado1;
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

export class TrianguloIsosceles extends Figura {
  constructor(lado1, base, altura) {
    super("Triangulo isosceles", 3);
    this.lado1 = lado1;
    this.lado1 = lado1;
    this.base = base;
    this.altura = altura;
  }

  area() {
    let a = (this.base * this.altura) / 2;
    return `El area del Triangulo Isosceles es: ${a}`;
  }
  perimetro() {
    let p = this.lado1 *2 + this.base;
    return `El perímetro del Triangulo Isosceles es: ${p}`;
  }
}
