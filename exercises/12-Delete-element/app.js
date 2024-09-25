let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson (personaEliminada) {
    let nuevoArr = people.filter((persona) => persona !== personaEliminada);
    return nuevoArr;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
