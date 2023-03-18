/* 
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
 */

function titleCase(str) {
	let sentence = ''
	let stringArray = str.split(' ')
	for (let i = 0; i < stringArray.length; i++) {
		let word = stringArray[i]
		sentence += word[0].toUpperCase() + word.substr(1, word.length).toLowerCase() + ' '
	}
	return sentence.trim()
}

titleCase("I'm a little tea pot")
