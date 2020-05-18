// Reto 8 Suma del numero de caracteres en array


function numberArray(array: string):number{

    let suma = 0;
    for(let index = 0;index <= array.length;index++){
        suma += index;
    }
    return suma;
}

console.log(numberArray("En un lugar de la mancha"));