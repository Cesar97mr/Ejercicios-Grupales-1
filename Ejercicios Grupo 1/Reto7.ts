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