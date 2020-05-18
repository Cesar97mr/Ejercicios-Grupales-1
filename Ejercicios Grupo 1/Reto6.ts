// Reto 6 Par en el array de números 

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