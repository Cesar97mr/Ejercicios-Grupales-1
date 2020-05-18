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