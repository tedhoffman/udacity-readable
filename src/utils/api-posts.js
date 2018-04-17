import { fetchData, postData } from '../utils/api'
const uuidv1 = require('uuid/v1')

export function apiGetPosts () {
	return fetchData('posts', 'GET')
}

export function apiMakePost (title, body, author, category) {
	let postBody = {
		id: uuidv1(),
		timestamp: Date.now(),
		title: title,
		body: body,
		author: author,
		category: category
	}
	postData('posts', postBody)
		.then(data => console.log(data))
		.catch(error => console.error(error))
}

export function apiGetPostById (id) {
	return fetchData(`posts/${id}`, 'GET')
}

export function apiPostsVoteById (id, option = 'upVote') {
	//POST /posts/:id	Used for voting on a post.	option - [String]: Either "upVote" or "downVote".
	return postData(`posts/${id}`, 'GET')
}

export function apiEditPost (id, title, body) {
	//PUT /posts/:id	Edit the details of an existing post.	title - [String] body - [String]
}

export function apiDeletePost (id) {
	fetchData(`posts/${id}`, 'DELETE')
}
