/* 

Chunky Monkey
Write a function that splits an array (first argument) 
into groups the length of size (second argument) and 
returns them as a two-dimensional array. 

*/

function chunkArrayInGroups(arr, size) {
	let result = []
	let arrayCopy = [...arr]
	for (let i = 0; i < arr.length; i += size) {
		result.push(arrayCopy.splice(0, size))
	}
	return result
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)
