/* 
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
	let result = []
	//loop through arguments
	for (let i = 0; i < arguments.length; i++) {
		const currentArr = arguments[i]
		//loop through current array in arguments
		for (let j = 0; j < currentArr.length; j++) {
			let indexValue = currentArr[j]
			//if the indexvalue is not found in result array, push it
			if (result.indexOf(indexValue) < 0) {
				result.push(indexValue)
			}
		}
	}
	return result
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
