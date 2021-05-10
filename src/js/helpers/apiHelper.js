// ~~~~~~~~~~~~~~~~~~~~~~~~~~ API HELPER

const API_URL = 'https://api.github.com/';

function callApi(endpoint, method = 'GET') {
	const url = `${API_URL}${endpoint}`;
	const options = {
		method,
	};
	return fetch(url, options)
		.then((response) => response.ok ? response.json() : Promise.reject(Error('Failed')))
		.catch((err) => {
			throw err;
		});
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~
export { callApi };
