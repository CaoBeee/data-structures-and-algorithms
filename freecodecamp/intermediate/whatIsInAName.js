function whatIsInAName(collection, source) {
	//Identify the keys from source ex. 'last'
	const sourceKeys = Object.keys(source)
	console.log(sourceKeys)

	//filter collection and loop through source keys ex. ['last'] = 1 loop
	let filteredCollection = collection.filter(obj => {
		// loop through the sourcekeys incase there is more than one property
		for (let i = 0; i < sourceKeys.length; i++) {
			/* 
            if the obj does not have sourcekey property "last" OR the object
            property ['last'] does not equal the source key 'last' then return false
            */
			if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
				return false
			}
		}
		return true
	})
	return filteredCollection
}

whatIsInAName(
	[
		{ first: 'Romeo', last: 'Montague' },
		{ first: 'Mercutio', last: null },
		{ first: 'Tybalt', last: 'Capulet' },
	],
	{ last: 'Capulet' }
)
