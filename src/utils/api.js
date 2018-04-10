export function fetchData (call = 'category', method = 'GET') {
	let output
	let headers = {
		'authorization': 'asdf',
		'content-type': 'application/json',
	}

	fetch(`http://localhost:3001/${call}`, { headers }).then(response =>
			response.json().then(data => ({
					data: data,
					status: response.status
			})
		).then(res => {
			return res.data
	}))
}
