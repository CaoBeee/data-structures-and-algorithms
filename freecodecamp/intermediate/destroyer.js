/* 
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. 
*/

function destroyer(arr) {
	for (let i = 1; i < arguments.length; i++) {
		arr = arr.filter(x => arguments[i] !== x)
	}
	return arr
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
