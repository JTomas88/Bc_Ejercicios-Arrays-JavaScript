let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

let nuevo = theBools.map((element)=>{
    if (element === 1){
        return("wiki");
        
    }else {
        return("woko")
    }
})

console.log(nuevo);
