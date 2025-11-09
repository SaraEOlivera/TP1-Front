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


/*  6. Convertir la primera letra de cada palabra en mayúscula   */
const capitalizarPalabras = frase => {
    let cadena = frase.trim().split(" ");

    cadena.forEach((element, i) => {
        cadena[i] = element.charAt(0).toUpperCase() + element.slice(1);
    });

    return cadena.join(" ");
}


console.log(capitalizarPalabras("hola mundo desde javascript"));

/*  7. Generar los primeros N números de la sucesión de Fibonacci  */
const fibonacci = numero => {
    let primero = 0;
    let segundo = 1;
    console.log("Secuencia Fibonacci");
    
    for (let i = 0; i < numero; i++) {
        let siguiente = primero + segundo;
        console.log(primero);
        primero = segundo;
        segundo = siguiente
    }
}

fibonacci(5);

/*   8. Lista de Productos   */
const productos = [
{ id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
{ id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
{ id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
{ id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
{ id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio

productos.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}; Precio: ${producto.precio}`)
    
});
// 2. Usando map: Crear un array con solo los nombres de los productos

let nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);


// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
const filtrados = productos.filter(producto => producto.stock > 20);
console.log(filtrados);

// 4. Usando find: Encontrar el producto con id 3
const id3 = productos.find(producto => producto.id === 3);
console.log(id3);

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
const valorTotal = productos.reduce((total, producto) => {
    return producto.precio * producto.stock;
},0)

console.log("Precio total del inventario: " + valorTotal);







