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



/* 3. Contar vocales en una cadena  */

const contarVocales = texto => {
    let vocales = texto.match(/[aeiou]/g);
    console.log(vocales)
}

console.log(contarVocales("JavaScript"));
console.log(contarVocales("Murcielago"));


/* 4. Encontrar el palíndromo  */
const esPalindromo = str1 =>{
    let str2 =  str1.split("").reverse().join("");
    let salida = str1 === str2 ? true : false;
    return salida;
}

console.log(esPalindromo("hola"));
console.log(esPalindromo("rallar"));
console.log(esPalindromo("chau"));
console.log(esPalindromo("neuquen"));


/* 5. Crear un programa para convertir la edad de un perro a años humanos */ 
function edadCaninna() {
    const equivalente = 7;
    edadCan = prompt("Ingresa la edad de tu perro: ");
    edadHumana = parseInt(edadCan) * equivalente;
    return `Tu perro tiene ${edadHumana} años humanos`;
}

//console.log(edadCaninna());



