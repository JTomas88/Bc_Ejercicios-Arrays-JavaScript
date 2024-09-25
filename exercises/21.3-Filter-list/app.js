let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// function filterByName(arr, str){
//     let clasificados = [];
//     for (let nombre of arr){
//         if (nombre.includes(str)){
//             clasificados.push(nombre);
//         }
//     }
//     return clasificados;
// }

function filterByName(arr, str){
    let filtrados = arr.filter((name)=>{
        return name.includes(str);
    })
    return filtrados;
}

console.log(filterByName(names, 'am'));
