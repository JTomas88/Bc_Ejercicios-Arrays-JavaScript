function sumTheElements(theArray) {
	let total = 0;
	for (let i=0; i<=theArray.length-1; i++){
		total += theArray[i];
	}
	return total;
}

console.log(sumTheElements([3,10]))
