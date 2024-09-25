// Your code here
let cuadricula = [];
function matrixBuilder(numero) {
    for (let i = 0; i < numero; i++) {
        cuadricula[i] = []
        for (let j = 0; j < numero; j++) {
            cuadricula[i][j] = Math.floor(Math.random()*2)
        }
    }
    return cuadricula;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))