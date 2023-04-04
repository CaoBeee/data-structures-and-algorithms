/* 
Given a string, a search string and replace string, you need to return the new string. E.g. (CANNOT USE REPLACE METHOD)
 Input = "aabbccdd"
 Search string = "bc"
 replace string = "ee"
 output = "aabeecdd"
Then make it so it goes through all instances in  a string.
"aabbccdbcd" (edited)
*/

let initial = 'aabbccdbcd'
let search = 'aabbccdbc'
let replace = 'eeeee'

function replacing(string, search, replace) {
	let result = string.split('')
	for (let i = 0; i < result.length; i++) {
		if (result.slice(i, i + search.length).join('') == search) {
			result.splice(i, search.length, replace.split())
		}
	}
	return result.join('')
}

replacing(initial, search, replace)
