/* 
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh". 
*/

function reverseString(str) {
	return (str = str.split('').reverse().join(''))
}

reverseString('hello')
