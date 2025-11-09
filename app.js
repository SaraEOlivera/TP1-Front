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



/*   9. Estudiantes y Calificaciones   */
const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
{ id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
{ id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
{ id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre} Edad: ${estudiante.edad}`)
});

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones




// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5

// 4. Usando find: Encontrar estudiante llamado 'María'
const estudianteMaria = estudiantes.find(estudiante => estudiante.nombre === "María");
console.log(estudianteMaria);

// 5. Usando reduce: Calcular la edad promedio de los estudiantes


/*   10. Películas  */
const peliculas = [
{ id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
{ id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
{ id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
{ id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
{ id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

// 1. Usando forEach: Mostrar título y año de cada película
peliculas.forEach(peli => {
    console.log(`Titulo: ${peli.titulo} - Año: ${peli.año}`)
});

// 2. Usando map: Crear array de títulos en mayúsculas
let titulosPelis = peliculas.map(peli => peli.titulo.toUpperCase());
console.log(titulosPelis);

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
console.log("Películas de drama con rating mayor a 8.5");

const ratingDrama = peliculas.filter(peli => peli.genero === "drama" && peli.rating > 8.5);
console.log(ratingDrama);

// 4. Usando find: Encontrar película estrenada en 2014
console.log("Peli estrenada en 2014");
const peli2014 = peliculas.find(peli => peli.año === 2014);
console.log(peli2014);

// 5. Usando reduce: Calcular la duración total de todas las películas

const duracionTotal = peliculas.reduce((total, peli) => {
    return total+= peli.duracion;
},0)

console.log("Duración total de todas las películas: " + duracionTotal + " minutos");




