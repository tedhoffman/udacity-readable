const API_URL = 'http://localhost:3001'
const API_AUTH = 'tedudacity'

export function fetchData (call, method = 'GET') {
	let headers = {
		'authorization': `${API_AUTH}`,
		'content-type': 'application/json',
	}
	return fetch(`${API_URL}/${call}`, {headers, method}).then((resp) => resp.json())
}

export function postData(call, data) {
	return fetch(`${API_URL}/${call}`, {
		body: JSON.stringify(data),
		headers: {
			'authorization': `${API_AUTH}`,
			'content-type': 'application/json'
		},
		method: 'POST',
	})
	.then(response => response.json())
}
