//RETO 3
function impares(x){
    for(let i = 0; i<x;i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
impares(21);

//RETO 5
function arcoiris(array){
    let arcoiris = ["rojo","naranja","amarillo", "verde", "azul", "Celeste", "violeta"];
    let colorIgual = "";
    for(let i = 0;i<array.length;i++){
        for(let j = 0;j<arcoiris.length;j++){
        if(array[i] == arcoiris[j]){
           console.log(colorIgual = array[i] + " esta en el arcoiris");
        }
    }
}
}
arcoiris(["negro","rojo","blanco","azul"]);

//RETO 6
function parArray(array: number[]):string{
    let contador:number = 0;
        for(let index = 0; index <= array.length; index++){
            if(array[index] % 2 == 0){
                contador++;
            }
        }
        if(contador > 0){
            return "Existe un numero par en el Array";
        }else{
            return "NO existe un numero par en el Array";
        }
    }
    
    console.log(parArray([1,3,5,7,2]));

    //RETO 7
    function Nombres(nombres : string[]){
        const letra : string = "M";
        let result : boolean = true || false;
        for(let i = 0; i<nombres.length;i++){
            if(nombres[i][0]===letra){
                result = true;      
            }else{
                result = false;
            }
        }
    }
    Nombres(["Mario","Carcos","Moises"]);

    //RETO 8 
    function numberArray(array: string):number{

        let suma = 0;
        for(let index = 0;index <= array.length;index++){
            suma += index;
        }
        return suma;
    }
    
    console.log(numberArray("En un lugar de la mancha"));
    
//RETO 10 
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

