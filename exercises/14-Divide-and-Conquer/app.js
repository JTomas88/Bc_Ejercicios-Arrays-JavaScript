let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(listOfNumbers) {
    let even = [];
    let odd = [];
    let final = [];
    for (let i = 0; i <= listOfNumbers.length - 1; i++) {
        if (listOfNumbers[i] % 2 === 0) {
            even.push(listOfNumbers[i]);
        } else {
            odd.push(listOfNumbers[i])
        }
    }
    final = odd.concat(even);
    return final;
}
console.log(mergeTwoList([1, 3,5,7,8,2,12,45,34,13]))




/////////////// CON FOREACH ///////////////////////////////

// function mergeTwoList(listOfNumbers) {
//     let even = [];
//     let odd = [];
//     let final = [];
//     listOfNumbers.forEach(element => {
//         if (element % 2 === 0) {
//             even.push(element);
//         }else{
//             odd.push(element);
//         }        
//     });
//     final = odd.concat(even);
//     return final;
// }