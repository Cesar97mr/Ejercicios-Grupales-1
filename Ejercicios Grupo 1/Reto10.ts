// Reto 10 
// 10.	Utilizando las dos funciones anteriores indicar si es par o impar la suma de los caracteres de cada uno de los siguientes arrays:
	

import { numeros } from "./Reto9"

function numeroArray(array: string[]): string[]{
    let arrayRespuesta = new Array
    let Letras:string;
    let numeroLetras: number;

    for(let index = 0; index <= array.length - 1; index++){
        Letras =  array[index];
        numeroLetras = Letras.length;
        arrayRespuesta[index] = numeros(numeroLetras)
    }
return arrayRespuesta;

}
let x = ["Casa", "Coche", "Ciudad", "Cesta"];
let y = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let z = ["Venezuela", "Veneno", "Voltaje"];

console.log(numeroArray(x));
console.log(numeroArray(y));
console.log(numeroArray(z));

