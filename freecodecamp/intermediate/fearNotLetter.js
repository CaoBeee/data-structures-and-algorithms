/* 
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. 
*/

function fearNotLetter(str) {
	// loop through the string
	for (let i = 0; i < str.length; i++) {
		// current char code
		const charCode = str.charCodeAt(i)

		//if current char isnt equal to first character + number
		if (charCode !== str.charCodeAt(0) + i) {
			console.log(charCode, str.charCodeAt(0) + i)
			//return char - 1  (skipped char)
			return String.fromCharCode(charCode - 1)
		}
	}
	return undefined
}

fearNotLetter('abce')
