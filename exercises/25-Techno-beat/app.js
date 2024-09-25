let boom = "Boom ";
let dropTheBass = "Drop the bass ";
let contadorDropTheBass = 0;
let breakTheBass = "¡¡¡Break the bass!!! ";

function lyricsGenerator(arreglo) {
    let arregloFinal = "";
    for (let i = 0; i <= arreglo.length; i++) {
        if (arreglo[i] === 1) {
            contadorDropTheBass++;
            arregloFinal += dropTheBass;
            if (contadorDropTheBass === 3) {
                arregloFinal += breakTheBass
                contadorDropTheBass = 0;
            }
        } else
            if (arreglo[i] === 0) {
                arregloFinal += boom;
            }
    }
    contadorDropTheBass = 0;
    return arregloFinal;
}
// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))  //Boom Boom Drop the bass Drop the bass Drop the bass !!!Break the bass!!! Boom Boom Boom
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
