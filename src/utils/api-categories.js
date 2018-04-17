import { fetchData } from '../utils/api'

export function apiGetCategories () {
	return fetchData('categories', 'GET')
}

export function apiGetCategoryPosts (category) {
	return fetchData(`${category}/posts`, 'GET')
}
