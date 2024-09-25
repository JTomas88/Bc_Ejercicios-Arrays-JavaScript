let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here
let resultingNames = allNames.filter((nombre) => {
    if (nombre[0] == "R"){
        return nombre
    }
})

console.log(resultingNames);
