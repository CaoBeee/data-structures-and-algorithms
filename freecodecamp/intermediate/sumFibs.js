/* 
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers.
 The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
	let sum = 0
	//first two nums in fib are 0 and 1
	let fib = [0, 1]
	while (fib[1] <= num) {
		if (fib[1] % 2 !== 0) {
			//add the second fib index to the sum
			sum += fib[1]
		}
		//set the first index to the second
		fib = [fib[1], fib[0] + fib[1]]
	}
	return sum
}

sumFibs(4)
