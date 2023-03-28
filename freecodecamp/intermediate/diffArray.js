/* 
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. 
*/

function diffArray(arr1, arr2) {
	const newArr = []
	let largerArr = []
	let smallerArr = []
	if (arr1.length == 0) {
		return arr2
	}
	if (arr2.length == 0) {
		return arr1
	}
	if (arr1.length > arr2.length) {
		largerArr = [...arr1]
		smallerArr = [...arr2]
	} else {
		largerArr = [...arr2]
		smallerArr = [...arr1]
	}
	for (let i = 0; i < largerArr.length; i++) {
		if (smallerArr.indexOf(largerArr[i]) == -1) {
			newArr.push(largerArr[i])
		}
	}
	for (let i = 0; i < smallerArr.length; i++) {
		if (largerArr.indexOf(smallerArr[i]) == -1) {
			newArr.push(smallerArr[i])
		}
	}
	return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

function diffArray2(arr1, arr2) {
	const newArr = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)))

	return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
