 export class Figura {
  constructor(nombre = "triangulo", cantidadLados = 3) {
    this.nombre = nombre;
    this.cantidadLados = cantidadLados;
  }
  area() {
    console.warn("La figura no tiene los lados necesarios");
  }
  perimetro(){
    console.warn("La figura no tiene los lados necesarios");

  }
}

class Cuadrado extends Figura {
  constructor(nombre, cantidadLados, lado1) {
    super(nombre, cantidadLados);
    this.lado1 = lado1;
  }
}
class Rectangulo extends Figura {
  constructor(nombre, cantidadLados, lado1, lado2) {
    super(nombre, cantidadLados);
    this.lado1 = lado1;
    this.lado2 = lado2;
  }
}
class Pentagono extends Figura {
  constructor(nombre, cantidadLados, lado1, lado2, lado3, lado4, lado5) {
    super(nombre, cantidadLados);
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
    this.lado4 = lado4;
    this.lado5 = lado5;
  }
}
class Hexagono extends Figura {
  constructor(nombre, cantidadLados, lado1, lado2, lado3, lado4, lado5, lado6) {
    super(nombre, cantidadLados);
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
    this.lado4 = lado4;
    this.lado5 = lado5;
    this.lado6 = lado6;
  }
}
