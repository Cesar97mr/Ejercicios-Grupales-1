//RETO 9
export function numeros (n:number):string{
    if(n % 2 == 0){
         return "El numero introducido es Par";
    }else{
        return "El numero introducido es Impar";
    }
}
console.log(numeros(20));

//RETO 1
function zodiaco(dia,mes){
    let signo = "";
    switch(mes){
    case "Enero":
        if(dia > 19) {
            signo = "ACUARIO";
        }else{
            signo = "CAPRICORNIO";
        }break;
    case "Febrero":
        if(dia > 18){
            signo = "PISCIS";
        }else{
            signo = "ACUARIO";
        }break;
    case "Marzo":
        if(dia > 20){
            signo = "ARIES";
        }else{
            signo = "PISCIS";
        }break;
    case "Abril":
        if(dia > 19) {
            signo = "TAURO";
        }else{
            signo = "ARIES";
        }break;
    case "Mayo":
        if(dia > 20){
            signo = "GEMINIS";
        }else{
            signo = "TAURO";
        }break;
    case "Junio":
        if(dia > 20){
            signo = "CANCER";
        }else{
            signo = "GEMINIS";
        }break;
    case "Julio":
        if(dia > 22){
            signo = "LEO";
        }else{
            signo = "CANCER";
        }break;
    case "Agosto":
        if(dia > 22){
            signo = "VIRGO";
        }else{
            signo = "LEO";
        }break;
    case "Septiembre":
        if(dia > 22){
            signo = "LIBRA";
        }else{
            signo = "VIRGO";
        }break;
    case "Octubre":
        if(dia > 22){
            signo = "ESCORPION";
        }else{
            signo = "LIBRA";
        }break;
    case "Noviembre":
        if(dia > 21){
            signo = "SAGITARIO";
        }else{
            signo = "ESCORPION";
        }break;
    case "Diciembre":
        if(dia > 21){
            signo = "CAPRICORNIO";
        }else{
            signo = "SAGITARIO";
        }break;
}return signo
}
console.log(zodiaco(22,"Enero"));

//RETO 2
let africa: string[] = ["Egipto", "Angola", "Etiopía", "Senegal", "Marruecos"]
let america:string[] = ["Canada","México","Colombia","Argentina","Brasil"];
let asia: string[] = ["China", "Catar", "Japon", "Nepal", "Yemen"];
let europa: string[] = ["Alemania", "España", "Francia", "Italia","Polonia"];
let ociania: string[] = ["Australia", "Micronesia", "Nueva Zelanda", "Samoa", "Fiyi"];
function continente(pais: string){
  
    if(africa.indexOf(pais) >= 0){
        console.log("Tu país pretenece a Africa");
    }else if(america.indexOf(pais) >= 0){
        console.log("Tu país pretenece a America");
    }else if(asia.indexOf(pais) >= 0){
        console.log("Tu país pretenece a Asia");
    }else if(europa.indexOf(pais) >= 0){
        console.log("Tu país pretenece a Europa");
    }else if(ociania.indexOf(pais) >= 0){
        console.log("Tu país pretenece a Ociania");
    }else{
        console.log("Tu país no se encuentra en la base de datos")
    }
       
   } 
    
continente("España");

//Reto 6
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