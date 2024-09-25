let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	// // Your code here
	let hoy = new Date();
	let edad = hoy.getFullYear() - person.birthDate.getFullYear();
	console.log(edad);
	let mes = hoy.getMonth() - person.birthDate.getMonth();

	if (mes < 0 || mes === 0 && hoy.getDate() < person.birthDate.getDate()) {
		edad--;
	}
	

	return ("Hello, my name is "+person.name+" and I am "+edad+" years old");
};

console.log(people.map(simplifier));
