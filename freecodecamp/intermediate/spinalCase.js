/* 
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {
	// Convert camelCase to kebab-case and to lowercase
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()

	// Replace all underscores and spaces with hyphens
	str = str.replace(/[_\s]/g, '-')

	return str
}

spinalCase('This Is Spinal Tap')
