/* 
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
	/* 
    The ^ in the beginning of the string indicates the match must start at 
    the beginning of the string. 
    The [^aeiou] indicates not a vowel. 
    The + means must match one or more consecutive non-bowel characters 
    */
	let consonantRegex = /^[^aeiou]+/
	//searching for a match with the consonant regex
	let myConsonants = str.match(consonantRegex)

	//return the match if it's not null
	return myConsonants !== null
		? //delete the consonants if true and also concatenate the consonants to the end
		  str.replace(consonantRegex, '').concat(myConsonants).concat('ay')
		: //if consonant equals null, then concatenate "way"
		  str.concat('way')
}

translatePigLatin('consonant')
