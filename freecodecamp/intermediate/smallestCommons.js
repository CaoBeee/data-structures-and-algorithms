/* 
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
	function isValidMult(m, min, max) {
		for (let i = min; i < max; i++) {
			if (m % i !== 0) {
				return false
			}
		}
		return true
	}

	let min = Math.min(...arr)
	let max = Math.max(...arr)
	let mult = max

	while (!isValidMult(mult, min, max)) {
		mult += max
	}

	return mult
}

smallestCommons([1, 5])
