// STRINGS = cadena de texto

let ejemplo1 = "Hola"
let ejemplo2 = 'Hola'
let ejemplo3 = `Hola` // aportación 2014

let frase1 = 'Ella me dijo "¡Hola!"'
console.log(frase1)

let nombre = "Sara"
let frase2 = `${nombre} me dijo "Hola"`
console.log(frase2)

console.log("el texto tiene", (nombre.lenght))

// forma antigua de una frase
let saludo1 = "buenos "
let saludo2 = "días"
let saludoFinal = saludo1 + saludo2 // + <-- concatena, une
let saludo_final = saludo1 + saludo2 
console.log (saludoFinal)


nombre = "Bill"
console.log(nombre[0])

nombre = "feDeriCO"
nombre = nombre[0].toUpperCase() + nombre.toLowerCase()

console.log(nombre)