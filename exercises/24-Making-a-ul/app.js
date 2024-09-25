let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color) {
	let li = '<li>';
	li+=color.label
	li+="</li>";
	return li;
}

function filterColors(color) {
	if (color.sexy == true){
		return color;
	}
}

function generateHTMLFromArray(array) {
	
	let filteredOptions = array.filter((filterColors));
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(element) {
		htmlString += element;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));
