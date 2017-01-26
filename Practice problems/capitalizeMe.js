function capitalize (example) {

	let newString = "";

	for (let i = 0; i < example.length; i++) {
		// If I'm a space, print a space in my place
		if (example.charAt(i) == " ") {
			newString = newString.concat(" ");
		}
		// If I'm not a space and the character before me is a space, or if I'm the first letter of the string,
		// then I'm the first character of a word. Therefore capitalize me!
		else if ((example.charAt(i) != " ") && ((example.charAt(i-1)) == " ") || (i == 0)) {
			let k = example.charAt(i).toUpperCase();
			newString = newString.concat(k);
		}
		// O I'm just a regular letter that doesn't need to be cap'd and just concat'd
		else {
			newString = newString.concat(example.charAt(i));
		}
	}
	return newString;
}


console.log(capitalize("agr ebw s a"));
console.log(capitalize(" a gr ebw s a"));
console.log(capitalize("  a gr ebw s a"));
console.log(capitalize("    a gr ebw s a"));
console.log(capitalize(" agr ebw s a "));
console.log(capitalize(" agr ebw s a   aer "));


