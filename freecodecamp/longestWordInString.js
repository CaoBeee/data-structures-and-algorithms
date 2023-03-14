/* 
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
	var stringArray = str.split(' ')
	let result = 0
	//[The, quick, brown, fox, jumped, over, the, lazy, dog]
	for (let i = 0; i < stringArray.length; i++) {
		if (stringArray[i].length > result) {
			result = stringArray[i].length
		}
	}
	return result
}

findLongestWordLength('The quick brown fox jumped over the lazy dog')
