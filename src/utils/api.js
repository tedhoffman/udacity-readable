/*

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://localhost:$q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}

*/

export function fetchData (what = '', method = 'GET') {
	let headers = {
		'authorization': 'asdf',
		'content-type': 'application/json',
		'method': method
	}

	return fetch(`http://localhost:3001/${what}`, { headers })
		.then((result) => result.json())
}
