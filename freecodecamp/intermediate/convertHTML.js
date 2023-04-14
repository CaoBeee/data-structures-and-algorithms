/* 
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. 
*/

function convertHTML(str) {
	function repEnt(ent) {
		switch (ent) {
			case '&':
				return '&amp;'
			case '<':
				return '&lt;'
			case '>':
				return '&gt;'
			case '"':
				return '&quot;'
			case "'":
				return '&apos;'
		}
	}
	str = str.replace(/[&<>"']/g, repEnt)
	return str
}

convertHTML('Dolce & Gabbana')
