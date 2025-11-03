/* 1. Calcular el área de un rectángulo */

const calcularAreaRectangulo = (ancho, alto) =>  {
    let area = ancho * alto;
    return area;
} 

console.log(calcularAreaRectangulo(5,3));



/* 2. Contar palabras en una cadena */

const contarPalabras = texto => {
    let palabras = texto.trim().split(" ");
    console.log(palabras);
    console.log(palabras.length);
}

console.log(contarPalabras("Humahuaca es un lugar copado"));