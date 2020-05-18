// Reto 2 En que continente vivo

// Base de datos
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
